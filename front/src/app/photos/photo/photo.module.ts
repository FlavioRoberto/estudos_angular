import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule {}
