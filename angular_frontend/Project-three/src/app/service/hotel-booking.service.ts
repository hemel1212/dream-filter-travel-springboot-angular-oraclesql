import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { HotelBooking, HotelBookingRevicedDto } from '../model/hotelBooking';

@Injectable({ providedIn: 'root' })
export class HotelBookingService {
  private apiUrl = 'http://localhost:8080/api/hotel-bookings';

  constructor(private http: HttpClient) {}

  getHotelBookings(): Observable<HotelBookingRevicedDto[]> {
    return this.http.get<HotelBookingRevicedDto[]>(this.apiUrl);
  }

  createHotelBooking(hotelBooking: HotelBooking): Observable<HotelBooking> {
    return this.http.post<HotelBooking>(this.apiUrl, hotelBooking);
  }
}
