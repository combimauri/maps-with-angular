import { Component, OnInit } from '@angular/core';

import { Map, View, Feature } from 'ol';
import { OSM, Vector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
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
  map: Map;

  ngOnInit(): void {
    const marker = new Feature({
      geometry: new Point(fromLonLat([this.lng, this.lat]))
    });

    const markers = new Vector({
      features: [marker]
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: markers
        })
      ],
      view: new View({
        center: fromLonLat([this.lng, this.lat]),
        zoom: 17
      })
    });
  }
}
