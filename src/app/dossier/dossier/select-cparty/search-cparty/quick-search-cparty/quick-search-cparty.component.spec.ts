import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchCpartyComponent } from './quick-search-cparty.component';

describe('QuickSearchCpartyComponent', () => {
  let component: QuickSearchCpartyComponent;
  let fixture: ComponentFixture<QuickSearchCpartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickSearchCpartyComponent]
    });
    fixture = TestBed.createComponent(QuickSearchCpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
