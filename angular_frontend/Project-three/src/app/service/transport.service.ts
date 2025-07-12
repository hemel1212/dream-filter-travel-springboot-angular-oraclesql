import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport';


@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private apiUrl = 'http://localhost:8080/api/transports'; // adjust if needed

  constructor(private http: HttpClient) {}

  getTransports(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.apiUrl);
  }

  // createTransport(transport: Transport): Observable<Transport> {
  //   return this.http.post<Transport>(this.apiUrl, transport);
  // }

   createTransport(transport: Transport): Observable<Transport> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Transport>(this.apiUrl, transport, { headers });
  }

      deleteTransports(transportId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${transportId}`);
  }
}
