import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierPageComponent } from './dossier-page.component';

describe('DossierPageComponent', () => {
  let component: DossierPageComponent;
  let fixture: ComponentFixture<DossierPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierPageComponent]
    });
    fixture = TestBed.createComponent(DossierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
