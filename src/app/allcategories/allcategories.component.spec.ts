import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategoriesComponent } from './allcategories.component';

describe('AllcategoriesComponent', () => {
  let component: AllcategoriesComponent;
  let fixture: ComponentFixture<AllcategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcategoriesComponent]
    });
    fixture = TestBed.createComponent(AllcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
