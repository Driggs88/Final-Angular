import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class TravelPostService {

  constructor(
    private httpTool: Http
  ) { }

  newTravelPost(componentInfo) {
    return this.httpTool
    .post(
      `${environment.apiBase}/api/travelPost`,

      // Form body Info to send to the back end
      componentInfo,

      // Send the cookies across domains
      { withCredentials: true }
    )

    // Parse the JSON
    .map(res => res.json());
  }

  allTravelPost() {
    return this.httpTool
    .get(
      `${environment.apiBase}/api/travelPost`,

      // Send the cookies across domains
      { withCredentials: true }
    )

    // Parse the JSON
    .map(res => res.json());
  }

}
