import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ProgrammingWithMosh";
  twit = {
    isLike: false,
    likeCount: 0,
  };
}
