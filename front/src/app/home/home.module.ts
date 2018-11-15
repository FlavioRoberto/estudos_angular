import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRountingModule } from './home.rounting.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    HomeRountingModule
  ],
  declarations: [SigninComponent, SignupComponent, HomeComponent]
})
export class HomeModule {}
