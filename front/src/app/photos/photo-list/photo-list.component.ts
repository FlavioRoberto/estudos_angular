import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IPhoto } from '../photo/IPhoto';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'ap-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
    photos: IPhoto[];
    filter = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';

    constructor(
        private activetedRoute: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        //captura os dados carregados pelo resolver
        this.userName = this.activetedRoute.snapshot.params.userName;
        this.photos = this.activetedRoute.snapshot.data.photos;

    }

    load() {
        this.photoService
            .listFromUserPaginated(this.userName, this.currentPage++)
            .subscribe(photos => {
                this.filter = '';
                this.photos = this.photos.concat(photos);
                console.log(photos);
                if (!photos.length) this.hasMore = false;
            });
    }
}
