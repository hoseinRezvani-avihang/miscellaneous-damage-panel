import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpartyInfoComponent } from './cparty-info.component';

describe('CpartyInfoComponent', () => {
  let component: CpartyInfoComponent;
  let fixture: ComponentFixture<CpartyInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpartyInfoComponent]
    });
    fixture = TestBed.createComponent(CpartyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
