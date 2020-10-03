import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherRepository } from '../models/repository.model';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weather: Weather;
  inputIsValid: boolean = true;
  currentTempMetric: string;
  metric: {} = {
    "imperial": " °F",
    "metric": " °C",
    "": " K"
  }

  emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private repo: WeatherRepository) { }

  ngOnInit(): void {
  }

  unixToUTC(unix_timestamp: number): string {
    let date: Date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours: number = date.getHours();
    // Minutes part from the timestamp
    let minutes: string = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds: string = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime: string = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }

  onGetWeather(form: NgForm) {
    this.currentTempMetric = form.value.tempSelect;
    this.repo.getWeather(form.value.cityName.trim(), form.value.tempSelect).subscribe((res: Weather) => {
      this.weather = res;
      this.inputIsValid = true;
    }, (error: any) => {
      this.inputIsValid = false;
    }).add(() => {
      this.weather.sys.utc_sunrise = this.unixToUTC(this.weather.sys.sunrise);
      this.weather.sys.utc_sunset = this.unixToUTC(this.weather.sys.sunset);
    });
    
  }
}
