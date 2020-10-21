import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  emailSignup: string;
   passwordSignup: string;
  
  constructor() { }

  ngOnInit(): void {
    this.buildForm()
  }
  buildForm(): void {
    this.userForm = new FormGroup({
      emailSignup: new FormControl('', [Validators.required]),
      passwordSignup: new FormControl('', [
        Validators.pattern('^(?=.*[0–9])(?=.*[a-zA-Z])([a-zA-Z0–9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ])
    });
  }
  login() {
    console.log(this.userForm.value.emailSignup)
    console.log(this.userForm.value.passwordSignup)
    }
}
