import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherRepository } from "./models/repository.model";
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherDetailsComponent,
    AboutComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WeatherRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
