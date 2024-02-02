import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTotalSharesComponent } from './hospital-total-shares.component';

describe('HospitalTotalSharesComponent', () => {
  let component: HospitalTotalSharesComponent;
  let fixture: ComponentFixture<HospitalTotalSharesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalTotalSharesComponent]
    });
    fixture = TestBed.createComponent(HospitalTotalSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
