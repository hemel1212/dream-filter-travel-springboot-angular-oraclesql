import { Component, OnInit } from '@angular/core';
import { TourGuide } from '../model/tourGuide';
import { TourGuideService } from '../service/tour-guide.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tour-guide',
  imports: [FormsModule, NgFor],
  templateUrl: './tour-guide.component.html',
  styleUrl: './tour-guide.component.css'
})
export class TourGuideComponent implements OnInit {
  tourGuides: TourGuide[] = [];

  newGuide: TourGuide = {
    name: '',
    experience: '',
    rating: 0
  };

  constructor(private guideService: TourGuideService) {}

  ngOnInit(): void {
    this.loadGuides();
  }

  loadGuides(): void {
    this.guideService.getGuides().subscribe(data => {
      this.tourGuides = data;
    });
  }

  onSubmit(): void {
    this.guideService.createGuide(this.newGuide).subscribe(() => {
      this.loadGuides();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.newGuide = {
      name: '',
      experience: '',
      rating: 0
    };
  }
}