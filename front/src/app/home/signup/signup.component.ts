import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userName: [
        Validators.required,
        Validators.pattern(/^[a-z0-9_\-]+$/),
        Validators.minLength(2),
        Validators.maxLength(30)
      ],
      fullName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(14)]
      ],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
