import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  styleUrls: ['./erro.component.scss'],
  templateUrl: './erro.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'erro-page app'
  },
})
export class ErroComponent {
  router: Router;
  location: Location;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }

  back(): void {
    if (window.history.length < 3) {
      this.router.navigate(['/']);
      return;
    }
    this.location.back();
  }

}