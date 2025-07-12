import { Component } from '@angular/core';
import { TourPackageService } from '../service/tour-package.service';
import { Router } from '@angular/router';
import { TourPackage } from '../model/tourPackage';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-choose-tour-package',
  imports: [NgFor, NgIf],
  templateUrl: './choose-tour-package.component.html',
  styleUrl: './choose-tour-package.component.css'
})
export class ChooseTourPackageComponent {


    tourPackages: TourPackage[] = [];
  
    constructor(private tourPackageService: TourPackageService, private router: Router) {}
  
    ngOnInit(): void {
      this.loadPackages();
    }
  
    loadPackages(): void {
      this.tourPackageService.getPackages().subscribe(data => this.tourPackages = data);
    }

    bookTour(tour: TourPackage): void {
      this.router.navigate(['/booking'], {state: {tour}});
      // Or navigate to a booking page or open a modal
    }

  
  

}
