import { FormGroup } from '@angular/forms';

export class ValidateInputClass {

  protected formGroup:FormGroup;

  constructor(_formGroup:FormGroup) {
    this.formGroup = _formGroup;
  }

  isNotValid(controlName: string): boolean{
    const control = this.formGroup.get(controlName);
    return (control?.dirty || control?.touched) ? !control?.valid : false;
  }

  classValidated(controlName:string, className:string):string{
    return this.isNotValid(controlName) ? `ng-invalid ng-dirty ${className}` : className;
  }
  
  isNotRuleValid(controlName:string, validation:string) : boolean{
    const control = this.formGroup.get(controlName);
    return control ? control?.hasError(validation) : false;
  }
}
