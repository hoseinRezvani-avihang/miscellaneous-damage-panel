import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCategorySharesComponent } from './hospital-category-shares.component';

describe('HospitalCategorySharesComponent', () => {
  let component: HospitalCategorySharesComponent;
  let fixture: ComponentFixture<HospitalCategorySharesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalCategorySharesComponent]
    });
    fixture = TestBed.createComponent(HospitalCategorySharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
