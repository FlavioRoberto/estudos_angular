import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        //async validator
        this.userNotTakenValidatorService.checkUserNameTaken()
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
