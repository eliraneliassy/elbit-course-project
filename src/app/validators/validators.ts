import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function foriddenNameValidator(name: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = name.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null
    }
}