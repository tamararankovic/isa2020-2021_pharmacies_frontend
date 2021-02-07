import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSpecificationComponent } from './medicine-specification.component';

describe('MedicineSpecificationComponent', () => {
  let component: MedicineSpecificationComponent;
  let fixture: ComponentFixture<MedicineSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
