import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AccountsModule } from './accounts/accounts.module.js';
import { TransactionsModule } from './transactions/transactions.module.js';
import { RecurringPaymentsModule } from './recurring-payments/recurring-payments.module.js';
import { SavingGoalsModule } from './saving-goals/saving-goals.module.js';

@Module({
  imports: [AccountsModule, TransactionsModule, RecurringPaymentsModule, SavingGoalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
