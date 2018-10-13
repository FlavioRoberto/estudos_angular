import { NgModule } from '@angular/core';
import { SignInModule } from './signin/signin.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,SignInModule]
})
export class HomeModule {}
