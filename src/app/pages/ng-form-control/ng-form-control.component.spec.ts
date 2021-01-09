import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormControlComponent } from './ng-form-control.component';

describe('NgFormControlComponent', () => {
  let component: NgFormControlComponent;
  let fixture: ComponentFixture<NgFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
