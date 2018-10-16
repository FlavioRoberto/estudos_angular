import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        RouterModule],
    declarations: [SigninComponent]
})
export class HomeModule { }
