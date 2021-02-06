import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservMedicineComponent } from './reserv-medicine.component';

describe('ReservMedicineComponent', () => {
  let component: ReservMedicineComponent;
  let fixture: ComponentFixture<ReservMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
