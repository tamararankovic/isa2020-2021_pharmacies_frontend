import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsAndPromotionsComponent } from './deals-and-promotions.component';

describe('DealsAndPromotionsComponent', () => {
  let component: DealsAndPromotionsComponent;
  let fixture: ComponentFixture<DealsAndPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsAndPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsAndPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
