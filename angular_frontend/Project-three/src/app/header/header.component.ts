import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Output() contentChange = new EventEmitter<string>();

  isLoggedIn = false;

  ngOnInit(): void {
    const customer = localStorage.getItem('loggedInCustomer');
    if (customer) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedInCustomer');
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;

    location.reload();
  }

  showContent(page: string) {
    this.contentChange.emit(page);
    const sidebar = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu')!)!;
    sidebar.hide(); // Close the sidebar after clicking
  }

}
