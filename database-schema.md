# BICS — Database Schema

## accounts

- id
- name
- balance

## transactions

- id
- amount
- name
- date
- category
- account_id

## recurring_payments

- id
- name
- amount
- due_day
- active
- account_id

## saving_goals

- id
- name
- target_amount
- current_amount
- completed
- account_id

## Relationships

1. accounts → transactions
    - One-to-Many
    - Один счёт может иметь много транзакций.
    - transactions.account_id → accounts.id

2. accounts → recurring_payments
    - One-to-Many
    - Один счёт может быть связан с несколькими регулярными платежами.
    - recurring_payments.account_id → accounts.id

3. accounts → saving_goals
    - One-to-Many
    - Один счёт может быть связан с несколькими финансовыми целями.
    - saving_goals.account_id → accounts.id