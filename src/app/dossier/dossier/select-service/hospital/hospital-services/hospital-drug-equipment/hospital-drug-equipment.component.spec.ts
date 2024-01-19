import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDrugEquipmentComponent } from './hospital-drug-equipment.component';

describe('HospitalDrugEquipmentComponent', () => {
  let component: HospitalDrugEquipmentComponent;
  let fixture: ComponentFixture<HospitalDrugEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalDrugEquipmentComponent]
    });
    fixture = TestBed.createComponent(HospitalDrugEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
