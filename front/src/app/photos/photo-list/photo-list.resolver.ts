import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { IPhoto } from '../photo/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPhoto[]> {
    const userName = route.params.userName;
    return this.service.listFromUser(userName);
  }
}
