import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Weather } from './weather.model';
import { Key } from 'protractor';

@Injectable({
    providedIn: "root"
})
export class WeatherRepository {
    constructor(private http: HttpClient) {

    }
    getWeather(city: string, tempUnit: string) {
        return this.http
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempUnit}&APPID=5d9d5038ee163d9feea89917d97be020`);
        
    }
}