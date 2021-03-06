import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    private httpTool: Http
  ) { }


  signup(componentInfo) {
    return this.httpTool
    .post(
      `${environment.apiBase}/api/signup`,

      {
        signupFullName: componentInfo.fullName,
        signupEmail: componentInfo.email,
        signupPassword: componentInfo.password
      },
      // Send the cookies across domains
      { withCredentials: true }
    )

    // Convert from observable to promise
    .toPromise()

    // Parse the JSON
    .then(res => res.json());
  }

  login(componentInfo){
    return this.httpTool
    .post(
      `${environment.apiBase}/api/login`,

      {
        enterEmail: componentInfo.email,
        enterPassword: componentInfo.password
      },

      // Send the cookies across domains
      { withCredentials: true }
    )

    //Convert from observable to promise
    .toPromise()

    // Parse the JSON
    .then(res => res.json());
  }

  logout() {
    return this.httpTool
      .post(
        `${environment.apiBase}/api/logout`,

        // Nothing to send to the back end
        {},

        // send the cookies across domains
        { withCredentials: true }
      )

      // Convert from observable to promise
      .toPromise()

      // Parse the JSON
      .then(res => res.json());
  }

  checklogin() {
      return this.httpTool
      .get(
        `${environment.apiBase}/api/checklogin`,

        // Send the cookies across domains
        { withCredentials: true }
      )

      // Convert from observable to promise
      .toPromise()

      // Parse the JSON
      .then(res => res.json());
  }

}
