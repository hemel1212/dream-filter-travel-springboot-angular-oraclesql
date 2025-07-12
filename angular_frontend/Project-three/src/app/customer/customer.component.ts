import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customer: Customer = {
    customerId: 0,
    name: '',
    email: '',
    passwordHash: '',
    phone: '',
    address: ''
  };

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  onSubmit(): void {
    this.customerService.createCustomer(this.customer).subscribe({
      next: (data: any) => {
        console.log('Customer saved:', data);
        this.getAllCustomers(); // Refresh list
        this.customer = {
          customerId: 0,
          name: '',
          email: '',
          passwordHash: '',
          phone: '',
          address: ''
        };
      },
      error: (err: any) => console.error('Error:', err)
    });
  }

  getAllCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => this.customers = data,
      error: (err: any) => console.error('Error:', err)
    });
  }
}

