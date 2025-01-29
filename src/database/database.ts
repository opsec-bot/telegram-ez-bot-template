import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import { rString } from '../utils/apiutil';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'json2csv';

export interface result {
  status: 'success' | 'failed';
  error?: string;
}

export interface User {
  expirationDate: string;
  license: string;
  telegramID: string;
}

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function connectDB() {
  db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });

  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    license TEXT UNIQUE,
    expirationDate TEXT,
    creationDate TEXT,
    creatorID TEXT,
    telegramID TEXT,
    total TEXT
  );`);
}

export async function createLicense(expirationDate: string, creatorID: string): Promise<string> {
  if (!expirationDate || !creatorID) {
    throw new Error('expirationDate and creatorID must be specified');
  }

  const currentDate = new Date();
  const license = `${rString(8)}`;

  const data = {
    license,
    expirationDate,
    creationDate: (currentDate.getTime() / 1000).toString(),
    creatorID,
    telegramID: '',
    total: '0',
  };

  await db.run(
    `INSERT INTO users (license, expirationDate, creationDate, creatorID, telegramID, total) VALUES (?, ?, ?, ?, ?, ?);`,
    data.license,
    data.expirationDate,
    data.creationDate,
    data.creatorID,
    data.telegramID,
    data.total
  );

  return license;
}

export async function deleteLicense(key: string, type: number): Promise<result> {
  try {
    let result;

    if (type === 1) {
      result = await lookupLicense(key);
    } else if (type === 2) {
      result = await lookupTelegramID(key);
    }

    if (result) {
      await db.run(`DELETE FROM users WHERE id = ?;`, result.id);
      return { status: 'success' };
    } else {
      return { status: 'failed', error: 'License does not exist' };
    }
  } catch (error) {
    console.error('Error deleting license:', error);
    throw new Error('Failed to delete license');
  }
}

export async function updateLicense(
  license: string,
  newData: {
    telegramID?: string;
    total?: string;
    expirationDate?: string;
  }
): Promise<result> {
  try {
    const user = await lookupLicense(license);

    if (user) {
      const updates = Object.entries(newData)
        .map(([key, value]) => `${key} = ?`)
        .join(', ');
      const values = Object.values(newData);

      if (updates) {
        await db.run(`UPDATE users SET ${updates} WHERE id = ?;`, ...values, user.id);
        return { status: 'success' };
      }
      return { status: 'failed', error: 'No valid properties to update' };
    } else {
      return { status: 'failed', error: 'License not found' };
    }
  } catch (error) {
    console.error('Error updating license:', error);
    throw new Error('Failed to update license');
  }
}

export async function lookupLicense(license: string) {
  return await db.get(`SELECT * FROM users WHERE license = ?;`, license);
}

export async function lookupTelegramID(telegramID: string) {
  return await db.get(`SELECT * FROM users WHERE telegramID = ?;`, telegramID);
}

export async function getAllUsers(): Promise<User[] | null> {
  try {
    const rows = await db.all(`SELECT * FROM users;`);
    return rows.map((row) => ({
      expirationDate: row.expirationDate,
      license: row.license,
      telegramID: row.telegramID,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function getCreationDate(license: string): Promise<string | null> {
  const result = await lookupLicense(license);
  return result ? result.creationDate : null;
}

export async function getExpirationDate(license: string): Promise<string | null> {
  const result = await lookupLicense(license);
  return result ? result.expirationDate : null;
}

export async function getTelegramID(license: string): Promise<string | null> {
  const result = await lookupLicense(license);
  return result ? result.telegramID : null;
}

export async function getTotal(license: string): Promise<string | null> {
  const result = await lookupLicense(license);
  return result ? result.total : null;
}

export async function counterUpd(telegramId: string): Promise<void> {
  try {
    const user = await lookupTelegramID(telegramId);

    if (user) {
      const newTotal = (parseInt(user.total) + 1).toString();
      await updateLicense(user.license, { total: newTotal });
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error incrementing total:', error);
    throw new Error('Failed to increment total');
  }
}

export async function exportDB(): Promise<result> {
  try {
    const users = await db.all(`SELECT * FROM users;`);

    if (users.length === 0) {
      return { status: 'failed', error: 'No data to export' };
    }

    const fields = [
      'id',
      'license',
      'expirationDate',
      'creationDate',
      'creatorID',
      'telegramID',
      'total',
    ];
    const csv = parse(users, { fields });

    const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
    const fileName = `export_${timestamp}.csv`;
    const filePath = path.resolve(__dirname, fileName);

    fs.writeFileSync(filePath, csv);

    return { status: 'success' };
  } catch (error) {
    console.error('Error exporting DB to CSV:', error);
    return { status: 'failed', error: (error as Error).message };
  }
}

export async function getUserCount() {
  try {
    const result = await db.get('SELECT COUNT(*) as count FROM users;');
    return result.count;
  } catch (error) {
    console.error('Error fetching user count:', error);
    throw new Error('Failed to fetch user count');
  }
}
