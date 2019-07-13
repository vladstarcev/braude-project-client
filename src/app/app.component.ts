import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  showLoginPopup: boolean = false;

  toggleLogin(value: boolean): void {
    this.showLoginPopup = value;
  }
}
