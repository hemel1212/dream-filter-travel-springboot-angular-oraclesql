import { Component, OnInit } from '@angular/core';
import { Transport } from '../model/transport';
import { TransportService } from '../service/transport.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transport',
  imports: [FormsModule, NgFor],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.css'
})
export class TransportComponent implements OnInit {
  transports: Transport[] = [];

  newTransport: Transport = {
    type: '',
    provider: '',
    availableSeat: 0,
    price: 0
  };

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.loadTransports();
  }

  loadTransports(): void {
    this.transportService.getTransports().subscribe(data => this.transports = data);
  }

  onSubmit(): void {
    this.transportService.createTransport(this.newTransport).subscribe(() => {
      this.loadTransports();
      this.resetForm();
    });

  
  }

  resetForm(): void {
    this.newTransport = {
      type: '',
      provider: '',
      availableSeat: 0,
      price: 0
    };
  }

   deleteTransports(id: number) {
      this.transportService.deleteTransports(id).subscribe(() => this.loadTransports());
    }
}

