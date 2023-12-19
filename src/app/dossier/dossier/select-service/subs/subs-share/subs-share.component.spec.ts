import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsShareComponent } from './subs-share.component';

describe('SubsShareComponent', () => {
  let component: SubsShareComponent;
  let fixture: ComponentFixture<SubsShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsShareComponent]
    });
    fixture = TestBed.createComponent(SubsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
