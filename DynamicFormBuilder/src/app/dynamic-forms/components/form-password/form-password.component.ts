import { Component, OnInit } from '@angular/core';
import { FormInterface } from 'app/dynamic-forms/models/formInteface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {

  config: FormInterface;
  group: FormGroup;
  count:number;
  control ;
  constructor() { }

  ngOnInit() {
    this.control = this.group.get(this.config.name);
  }


}
