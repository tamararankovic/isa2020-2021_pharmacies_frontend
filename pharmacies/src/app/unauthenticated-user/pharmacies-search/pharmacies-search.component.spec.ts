import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesSearchComponent } from './pharmacies-search.component';

describe('PharmaciesSearchComponent', () => {
  let component: PharmaciesSearchComponent;
  let fixture: ComponentFixture<PharmaciesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaciesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
