import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-main-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home-main-layout.component.html',
  styleUrl: './home-main-layout.component.css'
})
export class HomeMainLayoutComponent {

}
