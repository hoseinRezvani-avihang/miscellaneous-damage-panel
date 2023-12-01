import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPartnerComponent } from './select-partner.component';

describe('SelectPartnerComponent', () => {
  let component: SelectPartnerComponent;
  let fixture: ComponentFixture<SelectPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPartnerComponent]
    });
    fixture = TestBed.createComponent(SelectPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
