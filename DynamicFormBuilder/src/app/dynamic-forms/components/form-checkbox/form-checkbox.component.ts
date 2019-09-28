import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {

  config: FormInterface;
  group: FormGroup;
  count:number;
  control ;
  constructor() { }

  ngOnInit() {
    this.control = this.group.get(this.config.name);
  }


}
