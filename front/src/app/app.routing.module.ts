import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  { path: 'p/add', component: PhotosFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
