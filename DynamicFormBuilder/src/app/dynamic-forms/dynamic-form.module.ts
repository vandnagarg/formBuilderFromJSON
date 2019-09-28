import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormContainer } from './containers/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldsDirective } from './components/dynamic-fields.directive';
import { FormPasswordComponent } from './components/form-password/form-password.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { OrdinalComponent } from './uiContainers/ordinal/ordinal.component';
import { UiServiceService } from './uiContainers/ui-service.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations:[DynamicFormContainer, FormInputComponent, FormSelectComponent, 
    FormPasswordComponent,FormButtonComponent,FormCheckboxComponent, DynamicFieldsDirective, FormPasswordComponent, FormRadioComponent, FormCheckboxComponent, OrdinalComponent],
  exports:[DynamicFormContainer],
  entryComponents:[
      FormInputComponent,
      FormSelectComponent,
      FormButtonComponent,
      FormPasswordComponent,
      FormRadioComponent,
      FormCheckboxComponent
  ],
  providers:[UiServiceService]
})
export class DynamicFormModule {}