import { spawn } from 'child_process';
import { config } from '../configs/config';

interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: {
    public: number;
    private: number;
  };
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

export function adminCheck(id: number | undefined): boolean {
  if (id === undefined) return false;
  return config.adminIds.includes(id.toString());
}

export function runCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const args = command.split(' ');
    const child = spawn(args[0], args.slice(1));

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      reject(data.toString());
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(`Command '${command}' exited with code ${code}`);
      } else {
        resolve(output);
      }
    });
  });
}

export type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months';

export function newUnix(key: TimeUnit, value: number): string {
  if (!value || !key) {
    throw new Error('Both value and key must be specified');
  }

  const expirationDate = new Date();
  switch (key) {
    case 'seconds':
      expirationDate.setSeconds(expirationDate.getSeconds() + value);
      break;
    case 'minutes':
      expirationDate.setMinutes(expirationDate.getMinutes() + value);
      break;
    case 'hours':
      expirationDate.setHours(expirationDate.getHours() + value);
      break;
    case 'days':
      expirationDate.setDate(expirationDate.getDate() + value);
      break;
    case 'weeks':
      expirationDate.setDate(expirationDate.getDate() + value * 7);
      break;
    case 'months':
      expirationDate.setMonth(expirationDate.getMonth() + value);
      break;
    default:
      throw new Error('Invalid key');
  }

  const response = Math.floor(expirationDate.getTime() / 1000).toString();

  return response;
}

export function checkUnix(unix: number): string {
  const expireDate = new Date(unix * 1000);
  const today = new Date();
  const timeDiff = Math.abs(expireDate.getTime() - today.getTime());
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let time: string;
  if (expireDate.getTime() < today.getTime()) {
    time = '000';
  } else {
    time = daysLeft + ' day(s)';
  }

  return time;
}

export const rString = (value: number): string => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < value; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

export function combineUnix(timestamp1: number, timestamp2: number): number {
  const total = parseInt(checkUnix(timestamp1), 10) + parseInt(checkUnix(timestamp2), 10);

  return parseInt(newUnix('days', total), 10);
}

const litecoinNetwork: Network = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'ltc',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
};
