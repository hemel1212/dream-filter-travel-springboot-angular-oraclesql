export interface HotelBooking {
  hotelBookingId?: number | null;
  customerId: number;
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
  numRooms: number;
}

export interface HotelBookingRevicedDto {
  customerName: string;
  customerEmail: string;
  checkInDate: string;
  checkOutDate: string;
  numRooms: number;
}