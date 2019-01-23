import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsComponent } from './map/google-maps/google-maps.component';
import { MapboxComponent } from './map/mapbox/mapbox.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
