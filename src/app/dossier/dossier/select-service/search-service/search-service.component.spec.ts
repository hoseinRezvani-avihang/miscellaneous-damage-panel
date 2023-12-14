import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchServiceComponent } from './search-service.component';

describe('SearchServiceComponent', () => {
  let component: SearchServiceComponent;
  let fixture: ComponentFixture<SearchServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchServiceComponent]
    });
    fixture = TestBed.createComponent(SearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
