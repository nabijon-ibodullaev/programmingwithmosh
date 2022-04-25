import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherService extends DataService {
  constructor(http: HttpClient) {
    super(
      "http://api.weatherstack.com/current?access_key=ee9f1d80a645cc82f5a74486fd7dbcc6&query=Urgench",
      http
    );
  }
}
