import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [PhotoComponent, PhotoListComponent, PhotosFormComponent]
})
export class PhotosModule {}
