import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCpartyComponent } from './search-cparty.component';

describe('SearchCpartyComponent', () => {
  let component: SearchCpartyComponent;
  let fixture: ComponentFixture<SearchCpartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCpartyComponent]
    });
    fixture = TestBed.createComponent(SearchCpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
