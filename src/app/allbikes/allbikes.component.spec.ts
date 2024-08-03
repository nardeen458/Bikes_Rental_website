import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbikesComponent } from './allbikes.component';

describe('AllbikesComponent', () => {
  let component: AllbikesComponent;
  let fixture: ComponentFixture<AllbikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbikesComponent]
    });
    fixture = TestBed.createComponent(AllbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
