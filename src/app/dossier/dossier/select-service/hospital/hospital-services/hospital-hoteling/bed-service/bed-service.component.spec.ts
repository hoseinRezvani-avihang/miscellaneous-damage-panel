import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedServiceComponent } from './bed-service.component';

describe('BedServiceComponent', () => {
  let component: BedServiceComponent;
  let fixture: ComponentFixture<BedServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedServiceComponent]
    });
    fixture = TestBed.createComponent(BedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
