import type { Transaction } from '../transactions/transaction.entity.js';

export class Account {
  id: number;
  name: string;
  balance: number;
  transactions: Transaction[];
}
