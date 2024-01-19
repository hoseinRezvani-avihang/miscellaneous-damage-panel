import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCategoryComponent } from './hospital-category.component';

describe('HospitalCategoryComponent', () => {
  let component: HospitalCategoryComponent;
  let fixture: ComponentFixture<HospitalCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalCategoryComponent]
    });
    fixture = TestBed.createComponent(HospitalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
