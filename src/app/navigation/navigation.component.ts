import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';

@Component({
  selector: 'ng-maps-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }
}
