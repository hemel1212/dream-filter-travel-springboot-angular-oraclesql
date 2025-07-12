import { TestBed } from '@angular/core/testing';

import { TransportBookingService } from './transport-booking.service';

describe('TransportBookingService', () => {
  let service: TransportBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
