import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'user/:userName', component: PhotoListComponent },
  { path: 'p/add', component: PhotosFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
