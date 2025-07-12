import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBookingComponent } from './transport-booking.component';

describe('TransportBookingComponent', () => {
  let component: TransportBookingComponent;
  let fixture: ComponentFixture<TransportBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
