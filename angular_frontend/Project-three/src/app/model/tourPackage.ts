export interface TourPackage {
  packageId?: number;
  name: string;
  description: string;
  price: number;
  durationDays: number;
  destination: string;
  createdAt?: Date;
}
