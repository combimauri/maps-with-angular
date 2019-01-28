import { Component, OnInit } from '@angular/core';

import { Map, View, Feature } from 'ol';
import { OSM, Vector } from 'ol/source';
import { fromLonLat, addCommon } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Point from 'ol/geom/Point';

@Component({
  selector: 'ng-maps-open-layers',
  templateUrl: './open-layers.component.html',
  styleUrls: ['./open-layers.component.scss']
})
export class OpenLayersComponent implements OnInit {
  lat = -17.393695;
  lng = -66.157126;
  zoom = 17;
  map: Map;

  ngOnInit(): void {
    addCommon();

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([this.lng, this.lat]),
        zoom: this.zoom
      })
    });

    this.centerMapOnCurrentUserLocation();
  }

  centerMapOnCurrentUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.map.setView(
          new View({
            center: fromLonLat([this.lng, this.lat]),
            zoom: this.zoom
          })
        );

        const marker = new Feature({
          geometry: new Point(fromLonLat([this.lng, this.lat]))
        });
        const markers = new Vector({
          features: [marker]
        });
        this.map.addLayer(
          new VectorLayer({
            source: markers
          })
        );
      });
    }
  }
}
