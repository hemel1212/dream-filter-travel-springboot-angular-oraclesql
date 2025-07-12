import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TourGuide } from '../model/tourGuide';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {
  private apiUrl = 'http://localhost:8080/api/tour-guides';

  constructor(private http: HttpClient) {}

  getGuides(): Observable<TourGuide[]> {
    return this.http.get<TourGuide[]>(this.apiUrl);
  }

  createGuide(guide: TourGuide): Observable<TourGuide> {
    return this.http.post<TourGuide>(this.apiUrl, guide);
  }
}
