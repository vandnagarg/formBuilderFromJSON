import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {

  constructor() { }
  config: FormInterface;
  group: FormGroup;
  count:number;
  ngOnInit() {
  }

}
