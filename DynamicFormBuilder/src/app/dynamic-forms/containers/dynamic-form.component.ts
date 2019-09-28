import { Component, Input, ViewChild } from "@angular/core";
import { FormInterface } from "../models/formInteface";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'dynamic-form',
    templateUrl:"dynamic-form.component.html",
    styleUrls: ['dynamic-form.component.scss']
})

export class DynamicFormContainer {
    @Input() config: FormInterface[];

    form: FormGroup;
    
    get controls() { return this.config.filter(({ type }) => type !== 'button'); }
    get changes() { return this.form.valueChanges; }
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.createGroup();
    }

    // ngOnChanges() {
    //     if (this.form) {
    //         const controls = Object.keys(this.form.controls);
    //         const configControls = this.controls.map((item) => item.name);

    //         controls
    //             .filter((control) => configControls.indexOf(control) === -1)
    //             .forEach((control) => this.form.removeControl(control));

    //         configControls
    //             .filter((control) => controls.indexOf(control) === -1)
    //             .forEach((name) => {
    //                 const config = this.config.find((control) => control.name === name);
    //                 this.form.addControl(name, this.createControl(config));
    //             });
    //     }
    // }

    createGroup() {
        const group = this.fb.group({});
        this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    createControl(config: FormInterface) {
        const { disabled, validation, value } = config;
        return this.fb.control({ disabled, value }, validation);
    }
    onSubmit(){
        if(this.form.invalid){
            return;
        }
        console.log(this.form.value)
    }
}