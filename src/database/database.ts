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

/**
 * Connects to the SQLite database and initializes tables if they do not exist.
 */
export async function connectDB(): Promise<void> {
  db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      license TEXT UNIQUE,
      expirationDate TEXT,
      creationDate TEXT,
      creatorID TEXT,
      telegramID TEXT,
      total TEXT
    );
  `);
}

/**
 * Creates a new license and stores it in the database.
 */
export async function createLicense(expirationDate: string, creatorID: string): Promise<string> {
  if (!expirationDate || !creatorID) {
    throw new Error('expirationDate and creatorID must be specified');
  }

  const currentDate = new Date();
  const license = rString(8);

  await db.run(
    `INSERT INTO users (license, expirationDate, creationDate, creatorID, telegramID, total) VALUES (?, ?, ?, ?, ?, ?);`,
    license,
    expirationDate,
    (currentDate.getTime() / 1000).toString(),
    creatorID,
    '',
    '0'
  );

  return license;
}

/**
 * Deletes a license from the database.
 */
export async function deleteLicense(key: string, type: number): Promise<result> {
  try {
    const result = type === 1 ? await lookupLicense(key) : await lookupTelegramID(key);
    if (result) {
      await db.run(`DELETE FROM users WHERE id = ?;`, result.id);
      return { status: 'success' };
    }
    return { status: 'failed', error: 'License does not exist' };
  } catch (error) {
    console.error('Error deleting license:', error);
    throw new Error('Failed to delete license');
  }
}

/**
 * Updates an existing license in the database.
 */
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
        .map(([key]) => `${key} = ?`)
        .join(', ');
      const values = Object.values(newData);

      if (updates) {
        await db.run(`UPDATE users SET ${updates} WHERE id = ?;`, ...values, user.id);
        return { status: 'success' };
      }
      return { status: 'failed', error: 'No valid properties to update' };
    }
    return { status: 'failed', error: 'License not found' };
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

/**
 * Fetches all users from the database.
 */
export async function getAllUsers(): Promise<User[] | null> {
  try {
    const rows = await db.all(`SELECT * FROM users;`);
    return rows.map(({ expirationDate, license, telegramID }) => ({
      expirationDate,
      license,
      telegramID,
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

/**
 * Increments the usage counter for a user.
 */
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

/**
 * Exports the database records to a CSV file.
 */
export async function exportDB(): Promise<result> {
  try {
    const users = await db.all(`SELECT * FROM users;`);
    if (users.length === 0) {
      return { status: 'failed', error: 'No data to export' };
    }

    const csv = parse(users, {
      fields: [
        'id',
        'license',
        'expirationDate',
        'creationDate',
        'creatorID',
        'telegramID',
        'total',
      ],
    });
    const filePath = path.resolve(
      __dirname,
      `export_${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}.csv`
    );
    fs.writeFileSync(filePath, csv);

    return { status: 'success' };
  } catch (error) {
    console.error('Error exporting DB to CSV:', error);
    return { status: 'failed', error: (error as Error).message };
  }
}

/**
 * Retrieves the total user count.
 */
export async function getUserCount(): Promise<number> {
  try {
    const result = await db.get('SELECT COUNT(*) as count FROM users;');
    return result.count;
  } catch (error) {
    console.error('Error fetching user count:', error);
    throw new Error('Failed to fetch user count');
  }
}
