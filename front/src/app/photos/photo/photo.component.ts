import { Component, OnInit, Input } from '@angular/core';

const CLOUD = 'http://localhost:3003/imgs/';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  constructor() {}

  private _url = '';
  @Input() description = '';
  @Input()
  set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  ngOnInit() {}
}
