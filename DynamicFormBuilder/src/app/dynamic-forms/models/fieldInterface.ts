import { FormGroup } from '@angular/forms';
import { FormInterface } from './formInteface';

export interface FieldInterface {
  config: FormInterface,
  group: FormGroup,
  count:number
}
