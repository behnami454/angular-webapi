import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient , private formBuilder: FormBuilder) { }

  readonly BaseURI = 'https://localhost:44327/User/Register';
  readonly BaseURL1 = 'https://localhost:44327/User/Login';
  readonly BaseURL2 = 'https://localhost:44327/LogIn';

  formModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(formBuilder: FormGroup) {
    let confirmPswrdCtrl = formBuilder.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (formBuilder.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI, body);
  }

  login(formData) {
    return this.http.post(this.BaseURL1 ,formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL2);
  }
}
