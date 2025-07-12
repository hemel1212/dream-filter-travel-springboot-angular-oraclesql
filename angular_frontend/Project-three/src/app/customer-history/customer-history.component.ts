import { Component, OnInit } from '@angular/core';
import { TransportBooking } from '../model/transportBooking';
import { TransportBookingService } from '../service/transport-booking.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-history',
  imports: [NgFor],
  templateUrl: './customer-history.component.html',
  styleUrl: './customer-history.component.css'
})
export class CustomerHistoryComponent implements OnInit{
transportBookings: TransportBooking[] = [];
bookings: any[] = [];
  transports: any[] = [];
  selectedTransport: any;

  newBooking: TransportBooking = {
    bookingId: 0,
    transportId: 0,
    departureDate: '',
    arrivalDate: '',
    numSeats: 1
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

   ngOnInit(): void{
    this.loadTransportBookings();
   }

 loadTransportBookings(): void {
    this.transportBookingService.getTransportBookings().subscribe(data => this.transportBookings = data);
  }

  
}
