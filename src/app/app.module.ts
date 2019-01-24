/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import * as mapboxgl from 'mapbox-gl';
import {
  MapModule,
  MapAPILoader,
  BingMapAPILoaderConfig,
  BingMapAPILoader,
  WindowRef,
  DocumentRef,
  MapServiceFactory,
  BingMapServiceFactory
} from 'angular-maps';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GoogleMapsComponent } from './map/google-maps/google-maps.component';
import { MapboxComponent } from './map/mapbox/mapbox.component';
import { OpenLayersComponent } from './map/open-layers/open-layers.component';
import { BingMapsComponent } from './map/bing-maps/bing-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GoogleMapsComponent,
    MapboxComponent,
    OpenLayersComponent,
    BingMapsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    }),
    MapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: MapAPILoader,
      deps: [],
      useFactory: () => {
        const bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
        bc.apiKey = environment.bingmaps;
        bc.branch = 'release';
        return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    mapboxgl.accessToken = environment.mapbox;
  }
}
