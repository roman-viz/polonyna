import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesStorageService {
  private uploadUrl = `https://api.imgbb.com/1/upload?key=YOUR_API_KEY`; // Replace with your API key

  constructor(private http: HttpClient) {}

  getAllImages(file: File): any {
    // TODO
  }
}
