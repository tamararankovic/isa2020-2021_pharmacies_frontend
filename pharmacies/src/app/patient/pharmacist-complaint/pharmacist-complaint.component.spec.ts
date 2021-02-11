import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistComplaintComponent } from './pharmacist-complaint.component';

describe('PharmacistComplaintComponent', () => {
  let component: PharmacistComplaintComponent;
  let fixture: ComponentFixture<PharmacistComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
