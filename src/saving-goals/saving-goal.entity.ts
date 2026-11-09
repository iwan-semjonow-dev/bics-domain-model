import type { Account } from '../accounts/account.entity.js';

export class SavingGoal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  completed: boolean;
  account: Account;
}
