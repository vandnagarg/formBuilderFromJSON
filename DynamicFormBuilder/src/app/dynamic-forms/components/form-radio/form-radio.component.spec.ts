/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormRadioComponent } from './form-radio.component';

describe('FormRadioComponent', () => {
  let component: FormRadioComponent;
  let fixture: ComponentFixture<FormRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
