import { Component } from '@angular/core';
import { FormBuilder, MaxValidator, Validators } from '@angular/forms';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { appEmailDomains } from 'src/app/shared/validators/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [],
    tel: [],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [ sameValueGroupValidator('password', 'rePassword') ]
    })
  });

  constructor(private fb: FormBuilder) { }

  registerHandler() {
    console.log(this.form.value)
  }

}
