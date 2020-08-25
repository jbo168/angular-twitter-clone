import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storePost(post: Post) {
    this.http
      .put('https://angular-twitter-clone-1b761.firebaseio.com/', post)
      .subscribe(response => {
        console.log(response);
      });
  }
}
