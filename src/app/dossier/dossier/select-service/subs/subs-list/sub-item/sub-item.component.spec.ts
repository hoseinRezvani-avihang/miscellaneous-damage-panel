import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemComponent } from './sub-item.component';

describe('SubItemComponent', () => {
  let component: SubItemComponent;
  let fixture: ComponentFixture<SubItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubItemComponent]
    });
    fixture = TestBed.createComponent(SubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
