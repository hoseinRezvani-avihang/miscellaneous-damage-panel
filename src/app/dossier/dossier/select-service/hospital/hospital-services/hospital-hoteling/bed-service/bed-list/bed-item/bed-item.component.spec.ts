import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedItemComponent } from './bed-item.component';

describe('BedItemComponent', () => {
  let component: BedItemComponent;
  let fixture: ComponentFixture<BedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedItemComponent]
    });
    fixture = TestBed.createComponent(BedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
