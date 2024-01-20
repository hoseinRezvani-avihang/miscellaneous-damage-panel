import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBedComponent } from './select-bed.component';

describe('SelectBedComponent', () => {
  let component: SelectBedComponent;
  let fixture: ComponentFixture<SelectBedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBedComponent]
    });
    fixture = TestBed.createComponent(SelectBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
