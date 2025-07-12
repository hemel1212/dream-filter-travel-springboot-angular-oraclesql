import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Transport } from '../model/transport';
import { TransportService } from '../service/transport.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-transport',
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './choose-transport.component.html',
  styleUrl: './choose-transport.component.css'
})
export class ChooseTransportComponent {

  filteredOrders: any[] = [];
  transports: Transport[] = [];
  selectedStatus: string = 'ALL';

  

  constructor(private transportService: TransportService, private router: Router) { }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages(): void {
    this.transportService.getTransports().subscribe(data => this.transports = data);
  }

  bookTour(transport: Transport): void {
    this.router.navigate(['/transport-booking'], { state: { transport } });
    // Or navigate to a booking page or open a modal
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    if (status === 'ALL') {
      this.filteredOrders = this.transports;
    } else {
      this.filteredOrders = this.transports.filter(transport => transport.type === status);
    }
  }

}
