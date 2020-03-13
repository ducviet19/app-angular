import { Router } from '@angular/router';
import { AuthService } from './../../../../core/authentication/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private auth : AuthService , private router : Router ) {
    if(this.auth.user$) {
      this.router.navigate(['/']);
    }
  }


  login() {
    this.auth.login();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      remember: [true]
    });
  }
  
  
}
