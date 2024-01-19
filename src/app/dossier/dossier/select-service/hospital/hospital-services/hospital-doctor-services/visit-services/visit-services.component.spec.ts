import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitServicesComponent } from './visit-services.component';

describe('VisitServicesComponent', () => {
  let component: VisitServicesComponent;
  let fixture: ComponentFixture<VisitServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitServicesComponent]
    });
    fixture = TestBed.createComponent(VisitServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
