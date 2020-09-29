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

  emitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private repo: WeatherRepository) { }

  ngOnInit(): void {
  }

  onGetWeather(form: NgForm) {
    this.repo.getWeather(form.value.cityName).subscribe((res: Weather) => {
      this.weather = res;
    }).add(() => {
      this.weather.main.temp -= 273;
    });
    
  }
}
