import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-github-profile",
  templateUrl: "./github-profile.component.html",
  styleUrls: ["./github-profile.component.css"],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private Router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
  }
  submit() {
    this.Router.navigate(["/following"], {
      queryParams: { page: 1, order: "newest" },
    });
  }
}
