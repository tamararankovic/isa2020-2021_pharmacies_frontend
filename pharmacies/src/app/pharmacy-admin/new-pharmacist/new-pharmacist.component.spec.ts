import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPharmacistComponent } from './new-pharmacist.component';

describe('NewPharmacistComponent', () => {
  let component: NewPharmacistComponent;
  let fixture: ComponentFixture<NewPharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPharmacistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
