import { Injectable } from "@angular/core";
@Injectable()
export class CoursesService {
  getCourses() {
    return ["Angular", "React", "Node", "Express"];
  }
  getImage() {
    return "https://picsum.photos/300/200";
  }
}
