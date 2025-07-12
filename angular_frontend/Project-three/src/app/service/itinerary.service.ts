import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Itinerary } from '../model/itinerary';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private apiUrl = 'http://localhost:8080/api/itineraries';

  constructor(private http: HttpClient) {}

  getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(this.apiUrl);
  }

  createItinerary(itinerary: Itinerary): Observable<Itinerary> {
    return this.http.post<Itinerary>(this.apiUrl, itinerary);
  }
}
