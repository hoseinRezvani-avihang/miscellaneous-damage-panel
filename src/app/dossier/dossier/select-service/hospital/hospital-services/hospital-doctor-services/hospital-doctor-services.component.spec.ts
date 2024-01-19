import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDoctorServicesComponent } from './hospital-doctor-services.component';

describe('HospitalDoctorServicesComponent', () => {
  let component: HospitalDoctorServicesComponent;
  let fixture: ComponentFixture<HospitalDoctorServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalDoctorServicesComponent]
    });
    fixture = TestBed.createComponent(HospitalDoctorServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
