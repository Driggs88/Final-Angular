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

  }
}
