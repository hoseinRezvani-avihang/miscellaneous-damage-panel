import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalParaclinicComponent } from './hospital-paraclinic.component';

describe('HospitalParaclinicComponent', () => {
  let component: HospitalParaclinicComponent;
  let fixture: ComponentFixture<HospitalParaclinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalParaclinicComponent]
    });
    fixture = TestBed.createComponent(HospitalParaclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
