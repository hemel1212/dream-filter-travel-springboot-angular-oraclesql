import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../model/hotel';
import { HotelService } from '../service/hotel.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hotel',
imports: [FormsModule, NgFor],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent  implements OnInit {
  hotels: Hotel[] = [];
  hotel: Hotel = {
    name: '',
    location: '',
    pricePerNight: 0,
    rating: 0
  };

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe((data: Hotel[]) => this.hotels = data);
  }

  onSubmit(): void {
    this.hotelService.createHotel(this.hotel).subscribe({
      next : (response) =>{
        console.log('Hotel create successfully', response);
      },
      error : (error) => {
        console.error('Error creating hotel', error)
      }
    })
    // this.hotelService.createHotel(this.hotel).subscribe(() => {
    //   this.loadHotels();
    //   this.resetForm();
    // });
  }

  deleteHotel(id: number): void {
    this.hotelService.deleteHotel(id).subscribe(() => this.loadHotels());
  }

  resetForm(): void {
    this.hotel = {
      name: '',
      location: '',
      pricePerNight: 0,
      rating: 0
    };
  }
}
