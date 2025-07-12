import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TourSchedule } from '../model/tourSchedule';

@Injectable({
  providedIn: 'root'
})
export class TourScheduleService {
  private baseUrl = 'http://localhost:8080/api/tour-schedules';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TourSchedule[]> {
    return this.http.get<TourSchedule[]>(this.baseUrl);
  }

  create(schedule: TourSchedule): Observable<TourSchedule> {
    return this.http.post<TourSchedule>(this.baseUrl, schedule);
  }
}
