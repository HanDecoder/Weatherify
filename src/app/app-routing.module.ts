import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
    {path: "", component: WeatherDetailsComponent},
    {path: "about", component: AboutComponent},
    {path: "features", component: FeaturesComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }