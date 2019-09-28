import { ValidatorFn } from "@angular/forms";

export interface FormInterface{
    name:string,
    type:string,
    label?:string,
    options?:string[],
    placeholder?:string,
    validation? : ValidatorFn[],
    value?:any,
    disabled?:boolean
}