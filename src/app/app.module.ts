import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherRepository } from "./models/repository.model";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
