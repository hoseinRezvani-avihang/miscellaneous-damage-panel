import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalHotelingComponent } from './hospital-hoteling.component';

describe('HospitalHotelingComponent', () => {
  let component: HospitalHotelingComponent;
  let fixture: ComponentFixture<HospitalHotelingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalHotelingComponent]
    });
    fixture = TestBed.createComponent(HospitalHotelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
