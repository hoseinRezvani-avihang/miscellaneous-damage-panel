import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchPartnerComponent } from './quick-search-partner.component';

describe('QuickSearchPartnerComponent', () => {
  let component: QuickSearchPartnerComponent;
  let fixture: ComponentFixture<QuickSearchPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickSearchPartnerComponent]
    });
    fixture = TestBed.createComponent(QuickSearchPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
