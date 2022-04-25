import { Component } from "@angular/core";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.css"],
})
export class CourseFormComponent {
  categories = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Node Js" },
    { id: 3, name: "Express Js" },
    { id: 4, name: "MongoDB" },
  ];
}
