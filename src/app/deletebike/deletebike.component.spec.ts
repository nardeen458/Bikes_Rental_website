import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebikeComponent } from './deletebike.component';

describe('DeletebikeComponent', () => {
  let component: DeletebikeComponent;
  let fixture: ComponentFixture<DeletebikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletebikeComponent]
    });
    fixture = TestBed.createComponent(DeletebikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
