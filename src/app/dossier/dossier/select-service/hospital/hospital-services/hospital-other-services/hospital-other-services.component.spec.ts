import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalOtherServicesComponent } from './hospital-other-services.component';

describe('HospitalOtherServicesComponent', () => {
  let component: HospitalOtherServicesComponent;
  let fixture: ComponentFixture<HospitalOtherServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalOtherServicesComponent]
    });
    fixture = TestBed.createComponent(HospitalOtherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
