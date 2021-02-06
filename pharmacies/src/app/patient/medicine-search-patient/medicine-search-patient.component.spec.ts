import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSearchPatientComponent } from './medicine-search-patient.component';

describe('MedicineSearchPatientComponent', () => {
  let component: MedicineSearchPatientComponent;
  let fixture: ComponentFixture<MedicineSearchPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSearchPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSearchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
