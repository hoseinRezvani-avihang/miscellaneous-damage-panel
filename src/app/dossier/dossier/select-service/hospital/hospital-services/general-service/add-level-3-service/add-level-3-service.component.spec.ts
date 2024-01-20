import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLevel3ServiceComponent } from './add-level-3-service.component';

describe('AddLevel3ServiceComponent', () => {
  let component: AddLevel3ServiceComponent;
  let fixture: ComponentFixture<AddLevel3ServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLevel3ServiceComponent]
    });
    fixture = TestBed.createComponent(AddLevel3ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
