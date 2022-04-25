import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GithubFollowingService extends DataService {
  constructor(http: HttpClient) {
    super("https://api.github.com/users/NabijonIbodullayev/following", http);
  }
}
