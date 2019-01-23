import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GoogleMapsComponent } from './map/google-maps/google-maps.component';
import { MapboxComponent } from './map/mapbox/mapbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GoogleMapsComponent,
    MapboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
