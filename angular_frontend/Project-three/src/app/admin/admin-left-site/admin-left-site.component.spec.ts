import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeftSiteComponent } from './admin-left-site.component';

describe('AdminLeftSiteComponent', () => {
  let component: AdminLeftSiteComponent;
  let fixture: ComponentFixture<AdminLeftSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLeftSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeftSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
