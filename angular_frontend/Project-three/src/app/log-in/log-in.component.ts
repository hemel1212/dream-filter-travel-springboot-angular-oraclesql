import { Component } from '@angular/core';
import { CustomerService, LoginDTO } from '../service/customer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  loginDTO: LoginDTO = {
    email: '',
    password: ''
  };

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {

  }

  submitForm(): void {
    if (!this.loginDTO.email || !this.loginDTO.password) {
      alert('Please fill in all fields.');
      return;
    }

    this.customerService.login(this.loginDTO).subscribe({
      next: (customer) => {
        if (customer != null) {
          localStorage.setItem('customerId', JSON.stringify(customer.customerId));
          localStorage.setItem('loggedInCustomer', JSON.stringify(customer));
          localStorage.setItem('isLoggedIn', "true");
          this.router.navigate(['/choose-tour-package']);
        } else {
          alert("Email or passwor is invalid")
        }

      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    });
  }
}

