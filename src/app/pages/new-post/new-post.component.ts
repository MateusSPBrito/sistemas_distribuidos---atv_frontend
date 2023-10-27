import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(private service: PostsService) { }

  post = {
    file: null,
    description: '',
  }

  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0])
      this.post.file = event.target.files[0]
    else this.post.file = null
  }

  send() {
    if (this.post.file && this.post.description.length > 0)
      this.service.newPost(this.post).subscribe(result => {
        console.log(result)
        alert('Postagem realizada com sucesso!')
        window.location.href = "/posts"
      }, err => {
        console.log(err)
        alert('Erro ao fazer postagem')
      })
    else alert('Informe a imagem e descrição')
  }
}
