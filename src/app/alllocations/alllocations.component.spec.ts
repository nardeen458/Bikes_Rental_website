import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllocationsComponent } from './alllocations.component';

describe('AlllocationsComponent', () => {
  let component: AlllocationsComponent;
  let fixture: ComponentFixture<AlllocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlllocationsComponent]
    });
    fixture = TestBed.createComponent(AlllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
