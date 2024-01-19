import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTabComponent } from './hospital-tab.component';

describe('HospitalTabComponent', () => {
  let component: HospitalTabComponent;
  let fixture: ComponentFixture<HospitalTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalTabComponent]
    });
    fixture = TestBed.createComponent(HospitalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
