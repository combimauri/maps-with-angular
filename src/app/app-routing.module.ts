import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsComponent } from './map/google-maps/google-maps.component';
import { MapboxComponent } from './map/mapbox/mapbox.component';
import { OpenLayersComponent } from './map/open-layers/open-layers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/google-maps'
  },
  {
    path: 'google-maps',
    component: GoogleMapsComponent
  },
  {
    path: 'mapbox',
    component: MapboxComponent
  },
  {
    path: 'open-layers',
    component: OpenLayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
