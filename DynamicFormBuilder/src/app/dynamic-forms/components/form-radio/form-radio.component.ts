import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements OnInit {

  config: FormInterface;
  group: FormGroup;
  count:number;
  control ;
  constructor() { }

  ngOnInit() {
    this.control = this.group.get(this.config.name);
  }

}
