import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { PostService } from "./post.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getPosts() {
    return this.http.get<Array<any>>(this.url);
  }
  deletePost(user: any) {
    return this.http.delete(this.url + "/" + user.id);
  }

  putPost(user: any) {
    return this.http.put(this.url + "/" + user.id, JSON.stringify(user));
  }
  createPost(user: any) {
    return this.http.post(this.url, JSON.stringify(user));
  }
}
