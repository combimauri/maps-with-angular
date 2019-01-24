import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GoogleMapsComponent } from './map/google-maps/google-maps.component';
import { MapboxComponent } from './map/mapbox/mapbox.component';
import { OpenLayersComponent } from './map/open-layers/open-layers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GoogleMapsComponent,
    MapboxComponent,
    OpenLayersComponent
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
export class AppModule {
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
}
