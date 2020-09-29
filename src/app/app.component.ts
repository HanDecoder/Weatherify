import { Component } from '@angular/core';
import { WeatherRepository } from './models/repository.model';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'WeatherAngular';

  constructor() {
    
  }
  
}
