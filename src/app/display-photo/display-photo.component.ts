import { Component } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css'],
})
export class DisplayPhotoComponent {
  constructor(private photoService: FetchPhotoService) {
    console.log('PhotoService', photoService);
  }
  isloading: boolean = false;
  imageProperty: string = '';
  ngOnInit(): void {
    this.getPicture();
  }

  getPicture() {
    this.isloading = true;
    this.photoService.getPhotos().subscribe((data: any) => {
      console.log('My Data', data.urls.regular);
      this.imageProperty = data.urls.regular;
      console.log(this.imageProperty);
      this.isloading = false;
    });
  }
}
