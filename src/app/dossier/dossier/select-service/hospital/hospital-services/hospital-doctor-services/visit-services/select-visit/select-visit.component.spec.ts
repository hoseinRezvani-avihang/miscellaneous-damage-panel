import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVisitComponent } from './select-visit.component';

describe('SelectVisitComponent', () => {
  let component: SelectVisitComponent;
  let fixture: ComponentFixture<SelectVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectVisitComponent]
    });
    fixture = TestBed.createComponent(SelectVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
