import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { BookingService } from '../service/booking.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TourPackage } from '../model/tourPackage';
import { Customer } from '../model/customer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  customer: Customer = {
    customerId: 0,
    name: '',
    email: '',
    passwordHash: '',
    phone: '',
    address: '',
    createdAt: ''
  }

  booking: Booking = {
    customerId: 0,
    packageId: 0,
    bookingDate: '',
    startDate: '',
    endDate: '',
    numPeople: 1,
    status: 'PENDING',
    totalAmount: 0,
    bookingId: 0
  };

   bookings: Booking[] = [];
  

  tourPackage: TourPackage | undefined;

  constructor(private bookingService: BookingService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { tour: TourPackage }; // Correct key from the main page

    if (state?.tour) {
      this.tourPackage = state.tour;

      // Pre-fill booking form
      this.booking.packageId = state.tour.packageId ?? 0;
      this.booking.totalAmount = (state.tour.price ?? 0) * this.booking.numPeople;
    }
  }

  ngOnInit(): void {
    const cus = this.getLoggedInCustomer()
    if (cus != null)
      this.booking.customerId = cus.customerId;

    this.getAllBookings();
  }

  getLoggedInCustomer(): Customer | null {
    const customerData = localStorage.getItem('loggedInCustomer');
    if (!customerData) return null;

    try {
      const parsedCustomer: Customer = JSON.parse(customerData);
      return parsedCustomer;
    } catch (error) {
      console.error('Error parsing customer data from localStorage', error);
      return null;
    }
  }

  onSubmit(): void {
    this.bookingService.createBooking(this.booking).subscribe({
      next: () => {
        alert('Booking saved!');
        this.resetForm();
      },
      error: err => console.error('Booking error', err)
    });
  }

  resetForm(): void {
    this.booking = {
      customerId: 0,
      packageId: 0,
      bookingDate: '',
      startDate: '',
      endDate: '',
      numPeople: 1,
      status: 'PENDING',
      totalAmount: 0,
      bookingId: 0
    };
  }

  updateTotal(): void {
    if (this.tourPackage) {
      this.booking.totalAmount = this.booking.numPeople * this.tourPackage.price;
    }
  }

  getAllBookings(): void {
  const customer = this.getLoggedInCustomer();
  if (!customer) {
    console.error('No logged-in customer found.');
    return;
  }

  this.bookingService.getBookings().subscribe({
    next: data => {
      // Filter for logged-in customer AND status CONFIRMED
      this.bookings = data.filter(
        booking => booking.customerId === customer.customerId && booking.status === 'CONFIRMED'
      );
      console.log(this.bookings);
    },
    error: err => console.error('Fetch error', err)
  });
}


// Update booking status to CONFIRMED
  confirmBooking(id: number): void {
    this.bookingService.updateBookingStatus(id, 'CONFIRMED').subscribe({
      next: () => {
        alert(`Booking ${id} confirmed!`);
        this.getAllBookings(); // ✅ Fixed to correctly refresh the list
      },
      error: err => console.error('Status update failed', err)
    });
  }

}
