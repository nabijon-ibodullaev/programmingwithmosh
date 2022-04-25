import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  temprature: any;
  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.service.getAll().subscribe((res) => {
      this.temprature = res;
    });
  }
}
