import { Component, OnInit } from '@angular/core';
import { Booking } from '../../model/booking';
import { BookingService } from '../../service/booking.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-deshbord',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './admin-deshbord.component.html',
  styleUrl: './admin-deshbord.component.css'
})
export class AdminDeshbordComponent implements OnInit {

  revenue: any | undefined;
  totalUser: any|undefined;
  transaction: any|undefined


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

//   bookings: Booking[] = [];

//   constructor(private bookingService: BookingService) {}

//   ngOnInit(): void {
//     this.getAllBookings();
//   }

//   getAllBookings(): void {
//     this.bookingService.getBookings().subscribe({
//       next: data => this.bookings = data,
//       error: err => console.error('Fetch error', err)
//     });
//   }


// }

 bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getBookings().subscribe({
      next: data => {
        this.bookings = data,
        this.transaction = data.reduce((sum, booking) => sum + booking.totalAmount, 0);
        this.revenue = this.transaction*0.10;
        this.totalUser = this.bookings.length;
         console.log(data)
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

  deleteBookings(id: number){
    this.bookingService.deleteBooking(id).subscribe(()=>{
      alert('Delete Successfully.')
    })
  }
}
