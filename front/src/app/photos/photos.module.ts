import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    PhotoListModule,
    PhotoFormModule
  ]
})
export class PhotosModule {}
