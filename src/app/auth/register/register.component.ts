import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { foriddenNameValidator } from '../../validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: this.fb.control(null, { validators: [Validators.required, foriddenNameValidator(/eliran/)] }),
    email: this.fb.control(null, { validators: [Validators.required, Validators.email] }),
    password: this.fb.control(null, { validators: [Validators.required] })
  });;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(null, { validators: [Validators.required] }),
    //   email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    //   password: new FormControl(null, { validators: [Validators.required] })
    // })

  }

  register() {
    console.log(this.form);
  }

  showEmailError(): boolean | undefined {
    return !this.form.get('email')?.valid && this.form.get('email')?.touched && this.form.get('email')?.hasError('email')
  }


}
