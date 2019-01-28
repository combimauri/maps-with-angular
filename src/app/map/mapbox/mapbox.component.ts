import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'ng-maps-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {
  lat = -17.393695;
  lng = -66.157126;
  zoom = 17;
  style = 'mapbox://styles/mapbox/streets-v9';
  map: mapboxgl.Map;

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    this.centerMapOnCurrentUserLocation();
  }

  centerMapOnCurrentUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.map.flyTo({
          center: [this.lng, this.lat]
        });

        const marker = new mapboxgl.Marker();
        marker.setLngLat([this.lng, this.lat]);
        marker.addTo(this.map);
      });
    }
  }
}
