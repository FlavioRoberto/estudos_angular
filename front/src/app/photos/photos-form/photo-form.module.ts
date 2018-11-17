import { NgModule } from '@angular/core';
import { PhotosFormComponent } from './photos-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule],
  declarations: [PhotosFormComponent]
})
export class PhotoFormModule {}
