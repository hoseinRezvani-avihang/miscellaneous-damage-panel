import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartToWholeDialogComponent } from './part-to-whole-dialog.component';

describe('PartToWholeDialogComponent', () => {
  let component: PartToWholeDialogComponent;
  let fixture: ComponentFixture<PartToWholeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PartToWholeDialogComponent]
    });
    fixture = TestBed.createComponent(PartToWholeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
