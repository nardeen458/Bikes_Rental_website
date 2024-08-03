import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbikeComponent } from './addbike.component';

describe('AddbikeComponent', () => {
  let component: AddbikeComponent;
  let fixture: ComponentFixture<AddbikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbikeComponent]
    });
    fixture = TestBed.createComponent(AddbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
