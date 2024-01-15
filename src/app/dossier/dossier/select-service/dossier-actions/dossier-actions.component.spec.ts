import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierActionsComponent } from './dossier-actions.component';

describe('DossierActionsComponent', () => {
  let component: DossierActionsComponent;
  let fixture: ComponentFixture<DossierActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierActionsComponent]
    });
    fixture = TestBed.createComponent(DossierActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
