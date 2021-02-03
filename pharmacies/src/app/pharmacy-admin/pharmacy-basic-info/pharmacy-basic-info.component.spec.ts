import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyBasicInfoComponent } from './pharmacy-basic-info.component';

describe('PharmacyBasicInfoComponent', () => {
  let component: PharmacyBasicInfoComponent;
  let fixture: ComponentFixture<PharmacyBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
