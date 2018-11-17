import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    PhotoListModule,
    PhotoFormModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PhotosModule {}
