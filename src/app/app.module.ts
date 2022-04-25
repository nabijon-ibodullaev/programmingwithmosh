import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { ChangeDirective } from "./change.directive";
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseFormComponent } from "./course-form/course-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./posts/post.service";
import { DataService } from "./posts/data.service";
import { GithubFollowingComponent } from "./github-following/github-following.component";
import { GithubFollowingService } from "./github-following/services/github-following.service";
import { WeatherComponent } from "./weather/weather.component";
import { WeatherService } from "./weather/weather.service";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ChangeDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    ReactiveFormComponent,
    PostsComponent,
    GithubFollowingComponent,
    WeatherComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "posts", component: PostsComponent },
      { path: "following", component: GithubFollowingComponent },
      { path: "following/:id/:username", component: GithubProfileComponent },
      { path: "weather", component: WeatherComponent },
      { path: "**", component: NotFoundComponent },
    ]),
  ],
  providers: [PostService, GithubFollowingService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
