import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateofferComponent } from './updateoffer.component';

describe('UpdateofferComponent', () => {
  let component: UpdateofferComponent;
  let fixture: ComponentFixture<UpdateofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateofferComponent]
    });
    fixture = TestBed.createComponent(UpdateofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
