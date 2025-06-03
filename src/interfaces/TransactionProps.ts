export interface BankStatementProps {
  id: number;
  amount_to_transfer: number;
  to_bank_account: {
    holder_name: string;
    bank_name: string;
  }
  from_user_bank_account: {
    holder_name: string;
    bank_name: string;
    account_type: string;
  }
}
