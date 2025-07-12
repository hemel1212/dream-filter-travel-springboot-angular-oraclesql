import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Hotel } from '../model/hotel';
import { Router } from '@angular/router';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-choose-hotel',
  imports: [NgFor],
  templateUrl: './choose-hotel.component.html',
  styleUrl: './choose-hotel.component.css'
})
export class ChooseHotelComponent {

  hotels: Hotel[] = [];
    
      constructor(private hotelsService: HotelService, private router: Router) {}
    
      ngOnInit(): void {
        this.loadPackages();
      }
    
      loadPackages(): void {
        this.hotelsService.getHotels().subscribe(data => this.hotels = data);
      }
  
      bookHotel(hotel: Hotel): void {
        this.router.navigate(['/hotel-booking'], {state: {hotel}});
        // Or navigate to a booking page or open a modal
      }

}
