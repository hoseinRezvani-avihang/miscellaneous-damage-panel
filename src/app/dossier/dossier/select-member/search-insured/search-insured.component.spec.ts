import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInsuredComponent } from './search-insured.component';

describe('SearchInsuredComponent', () => {
  let component: SearchInsuredComponent;
  let fixture: ComponentFixture<SearchInsuredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInsuredComponent]
    });
    fixture = TestBed.createComponent(SearchInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
