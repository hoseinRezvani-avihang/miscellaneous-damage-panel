import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitItemComponent } from './visit-item.component';

describe('VisitItemComponent', () => {
  let component: VisitItemComponent;
  let fixture: ComponentFixture<VisitItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitItemComponent]
    });
    fixture = TestBed.createComponent(VisitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
