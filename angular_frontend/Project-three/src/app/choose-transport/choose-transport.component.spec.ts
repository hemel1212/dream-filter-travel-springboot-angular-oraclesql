import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTransportComponent } from './choose-transport.component';

describe('ChooseTransportComponent', () => {
  let component: ChooseTransportComponent;
  let fixture: ComponentFixture<ChooseTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
