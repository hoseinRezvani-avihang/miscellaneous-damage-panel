import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCpartyComponent } from './select-cparty.component';

describe('SelectCpartyComponent', () => {
  let component: SelectCpartyComponent;
  let fixture: ComponentFixture<SelectCpartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCpartyComponent]
    });
    fixture = TestBed.createComponent(SelectCpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
