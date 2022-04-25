import { Component, Input } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h1>
      <svg
        (click)="onClick()"
        [style.color]="isActive ? '#ff6f61' : '#ccc'"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
      {{ likeCount }}
    </h1>

    <ng-container
      *ngIf="course.length > 5; then thenTemplate; else elseTemplate"
    ></ng-container>
    <ng-template #thenTemplate> There are so many courses </ng-template>
    <ng-template #elseTemplate> no course </ng-template>

    <div [hidden]="course.length > 1">
      <h1>Hello World</h1>
    </div>

    <ul>
      <li [class.active]="viewMode == 'map'" class="btn btn-primary">
        <a (click)="viewMode = 'map'">Map</a>
      </li>
      <li [class.active]="viewMode == 'list'" class="btn btn-primary">
        <a (click)="viewMode = 'list'">List</a>
      </li>
    </ul>
    <div [ngSwitch]="viewMode">
      <div *ngSwitchCase="'map'">Map view</div>
      <div *ngSwitchCase="'list'">List view</div>
      <div *ngSwitchDefault="'default'">Otherwise</div>
    </div>
    <button (click)="add()">Add</button>
    <button class="btn btn-danger" (click)="load()">load</button>
    <ul *ngFor="let item of course; index as i">
      <li>
        {{ i }} - {{ item }} <button (click)="remove(item)">remove</button>
      </li>
    </ul>

    <input type="text" appChange="'uppercase'" />
  `,
  styles: [
    `
      .fa-heart {
        color: red;
      }
      .bg {
        color: #ccc !important;
      }
    `,
  ],
  providers: [CoursesService],
})
export class CoursesComponent {
  @Input() likeCount!: number;
  @Input() isActive?: boolean;

  onClick() {
    this.likeCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
  title = "This is My knowledge that Mosh taught me";
  constructor(private courses: CoursesService) {}
  course: any[] = [];
  viewMode = "map";
  add() {
    this.course.push(3);
  }
  remove(course: any) {
    let index = this.course.indexOf(course);
    this.course.splice(index, 1);
  }
  load() {
    this.course = [1, 3, 4];
  }
}
