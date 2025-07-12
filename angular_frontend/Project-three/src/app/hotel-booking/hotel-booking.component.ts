import { Component, OnInit } from '@angular/core';
import { HotelBooking, HotelBookingRevicedDto } from '../model/hotelBooking';
import { Booking } from '../model/booking';
import { Hotel } from '../model/hotel';
import { HotelBookingService } from '../service/hotel-booking.service';
import { BookingService } from '../service/booking.service';
import { HotelService } from '../service/hotel.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hotel-booking',
  imports: [FormsModule, NgFor],
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.css'
})
export class HotelBookingComponent implements OnInit {
  hotelBooking: HotelBooking = {
    customerId: Number(localStorage.getItem('customerId')),
    hotelId: 0,
    checkInDate: '',
    checkOutDate: '',
    numRooms: 1
  };

  hotelBookings: HotelBooking[] = [];
  bookings: Booking[] = [];
  hotels: Hotel[] = [];
  hotelBookingsDto: HotelBookingRevicedDto[] = [];

  constructor(
    private hotelBookingService: HotelBookingService,
    private bookingService: BookingService,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.hotelBookingService.getHotelBookings().subscribe(data => this.hotelBookingsDto = data);
    this.bookingService.getBookings().subscribe(data => this.bookings = data);
    this.hotelService.getHotels().subscribe(data => this.hotels = data);
  }

  onSubmit(): void {
    this.hotelBookingService.createHotelBooking(this.hotelBooking).subscribe(() => {
      this.loadAll();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.hotelBooking = {
      customerId: 0,
      hotelId: 0,
      checkInDate: '',
      checkOutDate: '',
      numRooms: 1
    };
  }
}
