import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGuideComponent } from './choose-guide.component';

describe('ChooseGuideComponent', () => {
  let component: ChooseGuideComponent;
  let fixture: ComponentFixture<ChooseGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
