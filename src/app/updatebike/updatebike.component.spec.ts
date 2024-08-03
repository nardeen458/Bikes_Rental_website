import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebikeComponent } from './updatebike.component';

describe('UpdatebikeComponent', () => {
  let component: UpdatebikeComponent;
  let fixture: ComponentFixture<UpdatebikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebikeComponent]
    });
    fixture = TestBed.createComponent(UpdatebikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
