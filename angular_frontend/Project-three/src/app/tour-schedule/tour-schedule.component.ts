import { Component, OnInit } from '@angular/core';
import { TourSchedule } from '../model/tourSchedule';
import { TourScheduleService } from '../service/tour-schedule.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tour-schedule',
  imports: [FormsModule, HttpClientModule, NgFor],
  templateUrl: './tour-schedule.component.html',
  styleUrl: './tour-schedule.component.css'
})
export class TourScheduleComponent implements OnInit {
  schedules: TourSchedule[] = [];
  packages: any[] = [];
  guides: any[] = [];

  newSchedule: TourSchedule = {
    tourPackageId: 0,
    tourGuideId: 0,
    tourDate: '',
    itineraryDetails: ''
  };

  constructor(
    private scheduleService: TourScheduleService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadSchedules();
    this.loadPackages();
    this.loadGuides();
  }

  loadSchedules(): void {
    this.scheduleService.getAll().subscribe(data => this.schedules = data);
  }

  loadPackages(): void {
    this.http.get<any[]>('http://localhost:8080/api/packages').subscribe(data => this.packages = data);
  }

  loadGuides(): void {
    this.http.get<any[]>('http://localhost:8080/api/guides').subscribe(data => this.guides = data);
  }

  onSubmit(): void {
    this.scheduleService.create(this.newSchedule).subscribe(() => {
      this.loadSchedules();
      this.resetForm();
    });
  }

  resetForm(): void {
    this.newSchedule = {
      tourPackageId: 0,
      tourGuideId: 0,
      tourDate: '',
      itineraryDetails: ''
    };
  }
}
