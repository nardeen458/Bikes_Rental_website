import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrentsComponent } from './allrents.component';

describe('AllrentsComponent', () => {
  let component: AllrentsComponent;
  let fixture: ComponentFixture<AllrentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllrentsComponent]
    });
    fixture = TestBed.createComponent(AllrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
