import type { Account } from '../accounts/account.entity.js';

export class RecurringPayment {
  id: number;
  name: string;
  amount: number;
  dueDay: number;
  active: boolean;
  account: Account;
}
