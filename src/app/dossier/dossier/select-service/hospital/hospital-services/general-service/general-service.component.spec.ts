import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralServiceComponent } from './general-service.component';

describe('GeneralServiceComponent', () => {
  let component: GeneralServiceComponent;
  let fixture: ComponentFixture<GeneralServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralServiceComponent]
    });
    fixture = TestBed.createComponent(GeneralServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
