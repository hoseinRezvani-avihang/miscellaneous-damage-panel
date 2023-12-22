import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartToWholeComponent } from './part-to-whole.component';

describe('PartToWholeComponent', () => {
  let component: PartToWholeComponent;
  let fixture: ComponentFixture<PartToWholeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PartToWholeComponent]
    });
    fixture = TestBed.createComponent(PartToWholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
