import { Component, OnInit } from '@angular/core';
import { IMapOptions, IMarkerIconInfo } from 'angular-maps';

@Component({
  selector: 'ng-maps-bing-maps',
  templateUrl: './bing-maps.component.html',
  styleUrls: ['./bing-maps.component.scss']
})
export class BingMapsComponent implements OnInit {
  lat = -17.393695;
  lng = -66.157126;
  zoom = 17;
  options: IMapOptions;
  iconInfo: IMarkerIconInfo;

  ngOnInit(): void {
    this.options = {
      center: { latitude: this.lat, longitude: this.lng },
      zoom: this.zoom
    };
    this.iconInfo = {
      markerType: 0
    };
  }
}
