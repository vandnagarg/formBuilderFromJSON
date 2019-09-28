import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  config: FormInterface;
  group: FormGroup;
  count:number;

  control ;
  constructor() { }

  ngOnInit() {
    this.control = this.group.get(this.config.name);
  }


}
