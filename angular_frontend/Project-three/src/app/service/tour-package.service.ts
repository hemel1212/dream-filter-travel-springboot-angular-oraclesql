import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TourPackage } from '../model/tourPackage';

@Injectable({
  providedIn: 'root'
})
export class TourPackageService {
  private apiUrl = 'http://localhost:8080/api/tour-packages';

  constructor(private http: HttpClient) {}

  getPackages(): Observable<TourPackage[]> {
    return this.http.get<TourPackage[]>(this.apiUrl);
  }

  createPackage(pkg: TourPackage): Observable<TourPackage> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // explicitly set content type
    });

    return this.http.post<TourPackage>(this.apiUrl, pkg, { headers });
  }

    deleteTourPackage(packageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${packageId}`);
  }
}
