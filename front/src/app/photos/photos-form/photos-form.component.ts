import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css']
})
export class PhotosFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const allowComments = this.photoForm.get('allowComments').value;
    const description = this.photoForm.get('description').value;
    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
