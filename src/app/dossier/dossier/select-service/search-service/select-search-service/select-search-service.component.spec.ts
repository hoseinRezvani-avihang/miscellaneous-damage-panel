import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSearchServiceComponent } from './select-search-service.component';

describe('SelectSearchServiceComponent', () => {
  let component: SelectSearchServiceComponent;
  let fixture: ComponentFixture<SelectSearchServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectSearchServiceComponent]
    });
    fixture = TestBed.createComponent(SelectSearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
