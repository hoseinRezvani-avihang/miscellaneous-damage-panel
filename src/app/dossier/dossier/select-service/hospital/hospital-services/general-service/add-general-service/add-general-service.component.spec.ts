import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralServiceComponent } from './add-general-service.component';

describe('AddGeneralServiceComponent', () => {
  let component: AddGeneralServiceComponent;
  let fixture: ComponentFixture<AddGeneralServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGeneralServiceComponent]
    });
    fixture = TestBed.createComponent(AddGeneralServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
