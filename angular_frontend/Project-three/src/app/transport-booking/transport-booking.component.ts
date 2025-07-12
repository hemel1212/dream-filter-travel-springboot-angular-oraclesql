import { Component, OnInit } from '@angular/core';
import { TransportBooking } from '../model/transportBooking';
import { TransportBookingService } from '../service/transport-booking.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-transport-booking',
  templateUrl: './transport-booking.component.html',
  styleUrl: './transport-booking.component.css',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgFor]
})
export class TransportBookingComponent implements OnInit {
  transportBookings: TransportBooking[] = [];
  bookings: any[] = [];
  transports: any[] = [];
  selectedTransport: any;

  newBooking: TransportBooking = {
    bookingId: 0,
    transportId: 0,
    departureDate: '',
    arrivalDate: '',
    numSeats: 1,
    // status: 'PENDING',
  };

  constructor(
    private transportBookingService: TransportBookingService,
    private http: HttpClient,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['transport']) {
      this.selectedTransport = nav.extras.state['transport'];
      this.newBooking.transportId = this.selectedTransport.transportId || 0;
    }
  }

  ngOnInit(): void {
    this.loadTransportBookings();
    this.loadBookings();
    this.loadTransports();

    const cus = this.getLoggedInCustomer()
    if (cus != null)
      this.newBooking.bookingId = cus.customerId;
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

  loadTransportBookings(): void {
    this.transportBookingService.getTransportBookings().subscribe(data => this.transportBookings = data);
  }

  loadBookings(): void {
    this.http.get<any[]>('http://localhost:8080/api/bookings').subscribe(data => this.bookings = data);
  }

  loadTransports(): void {
    this.http.get<any[]>('http://localhost:8080/api/transports').subscribe(data => this.transports = data);
  }

  onSubmit(): void {
    this.transportBookingService.createTransportBooking(this.newBooking).subscribe({
      next: res => {
        alert('Booking successfully.');
        this.loadTransportBookings();
        this.resetForm();
      }, 
      error: err=>{
        alert('Seat not available!');
      }

    });
  }

  resetForm(): void {
    this.newBooking = {
      bookingId: 0,
      transportId: 0,
      departureDate: '',
      arrivalDate: '',
      numSeats: 1,
      // status: 'PENDING',
    };
  }

  
}