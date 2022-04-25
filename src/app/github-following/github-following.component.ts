import { Component, OnInit } from "@angular/core";
import { GithubFollowingService } from "./services/github-following.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-github-following",
  templateUrl: "./github-following.component.html",
  styleUrls: ["./github-following.component.css"],
})
export class GithubFollowingComponent implements OnInit {
  githubFollowers: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {});

    this.route.queryParamMap.subscribe((params) => {});
    this.service.getAll().subscribe((res) => {
      this.githubFollowers = res;
    });
  }
}
