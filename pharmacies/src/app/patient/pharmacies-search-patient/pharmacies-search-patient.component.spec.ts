import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesSearchPatientComponent } from './pharmacies-search-patient.component';

describe('PharmaciesSearchPatientComponent', () => {
  let component: PharmaciesSearchPatientComponent;
  let fixture: ComponentFixture<PharmaciesSearchPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciesSearchPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciesSearchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
