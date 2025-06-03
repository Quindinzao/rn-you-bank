export interface UserDataAccountItemProps {
  id: number,
  holder_name: string,
  bank_name: string,
  account_number: string,
  account_digit: string,
}
export interface UserDataProps extends UserDataAccountItemProps {
  bank_code: string;
  agency_number: string;
  account_type: string;
  document: string;
  amount: number;
}
