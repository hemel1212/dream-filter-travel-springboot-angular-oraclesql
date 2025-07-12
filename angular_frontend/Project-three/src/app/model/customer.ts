export interface Customer {
  customerId: number;
  name: string;
  email: string;
  passwordHash: string;
  phone: string;
  address: string;
  createdAt?: string;
}
