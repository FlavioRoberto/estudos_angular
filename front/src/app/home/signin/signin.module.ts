import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { VmessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VmessageModule],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})
export class SignInModule {}
