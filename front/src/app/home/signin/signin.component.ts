import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, Route } from '@angular/router';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password)
            .subscribe(() => {
                this.router.navigate(['user', userName]);
            },
                error => {
                    console.log(error)
                    this.loginForm.reset();
                    this.userNameInput.nativeElement.focus();
                });
    }
}
