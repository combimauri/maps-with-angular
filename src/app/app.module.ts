import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { environment } from 'src/environments/environment';
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
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
