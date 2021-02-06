import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveOfferComponent } from './give-offer.component';

describe('GiveOfferComponent', () => {
  let component: GiveOfferComponent;
  let fixture: ComponentFixture<GiveOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
