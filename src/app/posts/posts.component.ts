import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostsModels } from "./posts.model";
import { PostService } from "./post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  providers: [],
})
export class PostsComponent implements OnInit {
  posts!: Array<any>;
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.posts = new Array<any>();
    this.service.getPosts().subscribe(
      (res) => (this.posts = res),
      (error: Response) => {
        alert("Unexpected is occured");
        console.log(error);
      }
    );
  }
  Get(form: HTMLInputElement) {
    console.log(form);
    let user = form;
    form.value = "";
    this.service.createPost(form).subscribe(
      (response) => {
        this.posts.splice(0, 0, form);
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 400) {
        }
        alert("Unexpected is occured");
        console.log(error);
      }
    );
  }
  remove(user: any) {
    this.service.deletePost(user).subscribe(
      (response) => {
        let index = this.posts.indexOf(user);
        let d = this.posts.splice(index, 1);
        if (d) {
          alert("Are you sure?");
        }
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("This post has already been deleted");
        } else {
          alert("Unexpected error is occured.");
          console.log(error);
        }
      }
    );
  }

  update(user: any) {
    this.service.putPost(user).subscribe((res) => {
      console.log(res);
    });
  }
}
