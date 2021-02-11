import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologistComplaintComponent } from './dermatologist-complaint.component';

describe('DermatologistComplaintComponent', () => {
  let component: DermatologistComplaintComponent;
  let fixture: ComponentFixture<DermatologistComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologistComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DermatologistComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
