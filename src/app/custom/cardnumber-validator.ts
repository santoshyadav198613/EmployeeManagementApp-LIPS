import { AbstractControl } from "@angular/forms";


export function cardValidator(control: AbstractControl) {
    if (control.value.toString().length < 16 || control.value.toString().length > 19) {
        return { cardValid: false }
    }

    return null;
}