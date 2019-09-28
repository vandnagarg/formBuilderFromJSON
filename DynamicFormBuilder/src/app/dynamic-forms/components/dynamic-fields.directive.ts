import { Directive, Input, Type, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FieldInterface } from '../models/fieldInterface';
import { FormPasswordComponent } from './form-password/form-password.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { UiServiceService } from '../uiContainers/ui-service.service';


const components: {[type: string]: Type<FieldInterface>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  password: FormPasswordComponent,
  select: FormSelectComponent,
  radio:FormRadioComponent,
  checkbox:FormCheckboxComponent
}; 

@Directive({
  selector: '[dynamicField]'
})


export class DynamicFieldsDirective {
  @Input() config;

  @Input() group: FormGroup;
  component: ComponentRef<FieldInterface>;

  
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,private uiService : UiServiceService) { }

  ngOnInit(){
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    let count = this.uiService.questionCount;
    const component = this.resolver.resolveComponentFactory<FieldInterface>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.count = count;
  }
}
