import { Component } from '@angular/core';
import { AdminLeftSiteComponent } from "../admin-left-site/admin-left-site.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-main-layout',
  imports: [AdminLeftSiteComponent, RouterOutlet],
  templateUrl: './admin-main-layout.component.html',
  styleUrl: './admin-main-layout.component.css'
})
export class AdminMainLayoutComponent {

}
