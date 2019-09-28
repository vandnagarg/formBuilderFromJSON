import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  
  config: FormInterface;
  group: FormGroup;
  control ;
  count:number;

  constructor() { }

  ngOnInit() {
    this.control = this.group.get(this.config.name);
  }

}
