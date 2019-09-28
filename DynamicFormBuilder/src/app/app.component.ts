import { Component } from '@angular/core';
import { FormInterface } from './dynamic-forms/models/formInteface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  form:FormInterface[] = [
    {
      type: 'input',
      label: 'Enter Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required]
    },
    {
      type: 'password',
      label: 'Enter Password',
      name: 'password',
      placeholder: 'Enter Password',
      validation: [Validators.required]
    },
    {
      type: 'radio',
      label: 'Select gender',
      name: 'gender',
      options: ['Male', 'Female', 'Other'],
      placeholder: 'Select gender',
      validation: [Validators.required]
    },
    
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'checkbox',
      label: '',
      name: 'acceptTerms',
      options: ['Accept terms and conditions'],
      placeholder: '',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ]
}
