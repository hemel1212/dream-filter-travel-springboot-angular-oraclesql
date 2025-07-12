import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportBooking } from '../model/transportBooking';


@Injectable({
  providedIn: 'root'
})
export class TransportBookingService {
  private apiUrl = 'http://localhost:8080/api/transport-bookings'; // Adjust if needed

  constructor(private http: HttpClient) {}

  getTransportBookings(): Observable<TransportBooking[]> {
    return this.http.get<TransportBooking[]>(this.apiUrl);
  }

  createTransportBooking(booking: TransportBooking): Observable<TransportBooking> {
    return this.http.post<TransportBooking>(this.apiUrl, booking);
  }

  // update
  //   updateTransportBookingStatus(id: number, status: string): Observable<TransportBooking> {
  //   return this.http.put<TransportBooking>(`${this.apiUrl}/${id}/status?status=${status}`, {});
  // }
}
