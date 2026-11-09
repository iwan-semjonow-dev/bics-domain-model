import { BicsCategory } from './enums/bics-category.enum.js';
import type { Account } from '../accounts/account.entity.js';

export class Transaction {
  id: number;
  amount: number;
  name: string;
  date: Date;
  category: BicsCategory;
  account: Account;
}
