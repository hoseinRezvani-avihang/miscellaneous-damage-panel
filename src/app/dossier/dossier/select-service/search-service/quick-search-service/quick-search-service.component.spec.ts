import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchServiceComponent } from './quick-search-service.component';

describe('QuickSearchServiceComponent', () => {
  let component: QuickSearchServiceComponent;
  let fixture: ComponentFixture<QuickSearchServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuickSearchServiceComponent]
    });
    fixture = TestBed.createComponent(QuickSearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
