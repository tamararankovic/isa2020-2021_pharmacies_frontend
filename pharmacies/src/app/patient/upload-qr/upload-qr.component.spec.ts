import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQrComponent } from './upload-qr.component';

describe('UploadQrComponent', () => {
  let component: UploadQrComponent;
  let fixture: ComponentFixture<UploadQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
