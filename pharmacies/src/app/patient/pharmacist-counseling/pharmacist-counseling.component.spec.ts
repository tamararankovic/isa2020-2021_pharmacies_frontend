import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistCounselingComponent } from './pharmacist-counseling.component';

describe('PharmacistCounselingComponent', () => {
  let component: PharmacistCounselingComponent;
  let fixture: ComponentFixture<PharmacistCounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistCounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
