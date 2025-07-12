import { Component, OnInit } from '@angular/core';
import { TourPackageService } from '../service/tour-package.service';
import { TourPackage } from '../model/tourPackage';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-package',
  imports: [FormsModule, NgFor],
  templateUrl: './tour-package.component.html',
  styleUrl: './tour-package.component.css'
})
export class TourPackageComponent implements OnInit {
  tourPackages: TourPackage[] = [];

  newPackage: TourPackage = {
    name: '',
    description: '',
    price: 0,
    durationDays: 1,
    destination: ''
  };

  constructor(private tourPackageService: TourPackageService, private router: Router) { }

  ngOnInit(): void {
    this.loadPackages();
    console.log(`data is ${this.tourPackages}`)
  }

  loadPackages(): void {
    this.tourPackageService.getPackages().subscribe(
      data =>  this.tourPackages = data ,
      error =>  console.log(`Error during package load which is `, error) );
  }

  onSubmit(): void {
    this.tourPackageService.createPackage(this.newPackage).subscribe(() => {
      this.loadPackages();
      this.resetForm();
    });
  }


    deleteTourPackage(id: number): void {
    this.tourPackageService.deleteTourPackage(id).subscribe(() => this.loadPackages());
  }
  resetForm(): void {
    this.newPackage = {
      name: '',
      description: '',
      price: 0,
      durationDays: 1,
      destination: ''
    };
  }
}

