import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutpatientServiceComponent } from './add-outpatient-service.component';

describe('AddOutpatientServiceComponent', () => {
  let component: AddOutpatientServiceComponent;
  let fixture: ComponentFixture<AddOutpatientServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddOutpatientServiceComponent]
    });
    fixture = TestBed.createComponent(AddOutpatientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
