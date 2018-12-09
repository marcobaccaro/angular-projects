import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title = 'ng-pwa-mbaccaro';

  constructor(swUpdate: SwUpdate) {

    // swUpdate.available.subscribe(x => {

    //   swUpdate.activateUpdate().then(() => document.location.reload());

    // });

  }

}
