import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8080/api/bookings'; // Update if different
  private deleteApiUrl = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }

  // update
  updateBookingStatus(id: number, status: string): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/bookings/${id}`);
  }
}
