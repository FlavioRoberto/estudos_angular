import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPhoto } from '../photo/IPhoto';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[];
  filter = '';

  constructor(private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //captura os dados carregados pelo resolver
    this.photos = this.activetedRoute.snapshot.data.photos;
  }
}
