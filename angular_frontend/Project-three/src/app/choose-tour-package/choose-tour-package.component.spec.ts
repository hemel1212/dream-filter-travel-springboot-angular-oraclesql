import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTourPackageComponent } from './choose-tour-package.component';

describe('ChooseTourPackageComponent', () => {
  let component: ChooseTourPackageComponent;
  let fixture: ComponentFixture<ChooseTourPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseTourPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTourPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
