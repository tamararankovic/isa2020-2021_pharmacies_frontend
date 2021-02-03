import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBasicInfoComponent } from './admin-basic-info.component';

describe('AdminBasicInfoComponent', () => {
  let component: AdminBasicInfoComponent;
  let fixture: ComponentFixture<AdminBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
