import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageSlideInAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [ pageSlideInAnimation ]
})
export class AppComponent {
  showLoginPopup: boolean = false;

  toggleLogin(value: boolean): void {
    this.showLoginPopup = value;
  }

  getState(outlet: RouterOutlet): void {
    return outlet.activatedRouteData.state;
  }
}
