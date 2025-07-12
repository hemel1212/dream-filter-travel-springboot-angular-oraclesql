export interface Payment {
  paymentId?: number;
  bookingId: number;          // Flattened from Booking
  paymentDate: string;        // ISO date string
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
}
