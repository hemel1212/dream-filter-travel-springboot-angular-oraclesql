import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, NgFor],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];

  newPayment: Payment = {
    bookingId: 0,
    paymentDate: '',
    amount: 0,
    paymentMethod: '',
    paymentStatus: ''
  };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(): void {
    this.paymentService.getPayments().subscribe(data => this.payments = data);
  }

  onSubmit(): void {
    this.paymentService.createPayment(this.newPayment).subscribe(() => {
      this.loadPayments();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.newPayment = {
      bookingId: 0,
      paymentDate: '',
      amount: 0,
      paymentMethod: '',
      paymentStatus: ''
    };
  }
}
