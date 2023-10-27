import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://192.168.1.6:3000/'

  newPost(post: any) {
    const newPost = new FormData()
    newPost.append('file', post.file)
    newPost.append('description', post.description)
    return this.http.post<any>(this.apiUrl, newPost)
  }

  getPosts() {
    return this.http.get<any>(this.apiUrl + 'posts')
  }
}
