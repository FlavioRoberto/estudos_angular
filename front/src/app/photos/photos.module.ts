import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotosFormComponent,
    PhotosComponent,
    FilterByDescription
  ]
})
export class PhotosModule {}
