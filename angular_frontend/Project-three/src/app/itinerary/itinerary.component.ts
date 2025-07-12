import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itinerary } from '../model/itinerary';
import { ItineraryService } from '../service/itinerary.service';
import { TourPackageService } from '../service/tour-package.service';
import { TourPackage } from '../model/tourPackage';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-itinerary',
  imports: [FormsModule, NgFor],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent implements OnInit {
  itineraries: Itinerary[] = [];
  tourPackages: TourPackage[] = [];

  itinerary: Itinerary = {
    packageId: 0,
    dayNumber: 1,
    description: '',
    location: ''
  };

  constructor(
    private itineraryService: ItineraryService,
    private tourPackageService: TourPackageService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.itineraryService.getItineraries().subscribe(data => this.itineraries = data);
    this.tourPackageService.getPackages().subscribe((data: TourPackage[]) => this.tourPackages = data);
  }

  onSubmit(): void {
    this.itineraryService.createItinerary(this.itinerary).subscribe(() => {
      this.loadData();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.itinerary = {
      packageId: 0,
      dayNumber: 1,
      description: '',
      location: ''
    };
  }
}