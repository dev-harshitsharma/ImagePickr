import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';

interface UnsplashResponse{
  urls:{
    regular:string
  }
}


@Injectable({
  providedIn: 'root',
})
export class FetchPhotoService {
  constructor(private http: HttpClient) {}
  getPhotos() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID rWetLD28ST3MmkVZvG8mrRgjHxrYX-6qn7m_y9gyF9A',
        },
      })
      .pipe(
        catchError((error) => {
          console.error('API Error:', error);
          throw error;
        })
      );
  }
}
