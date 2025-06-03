// Interfaces
import { UserDataProps } from './UserDataProps';

export interface HeaderProps {
  userData: UserDataProps[];
  onIndexChange?: (index: number) => void;
}
