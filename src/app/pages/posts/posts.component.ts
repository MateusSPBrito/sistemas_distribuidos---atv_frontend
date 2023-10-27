import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service: PostsService) { }

  posts: any = []
  url = 'http://192.168.1.6:3000/file/'

  ngOnInit() {
    this.service.getPosts().subscribe(result => {
      console.log(result)
      this.posts = result.posts
    }, err => {
      console.log(err)
    })
  }

  reload() {
    window.location.reload()
  }

  newPost() {
    window.location.href = "/new-post"
  }

}
