import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLoggedOut: boolean = false;

  signUpInfo = {
    fullName: '',
    email: '',
    password: ''
  };

  errorMessage: string;

  loginInfo = {
    email: '',
    password: ''
  };

  loginErrorMessage: string;


  constructor(
    private authTool: AuthService,
    private routerTool: Router
  ) { }

  ngOnInit() {
    this.authTool.checklogin()
    // If success, we are logged in.
    .then((resultFromApi) => {
        this.routerTool.navigate(['/travelPost']);
  })

  //Even is you don't do anything on error, catch to avoid a console error.
  .catch((err) => {
      this.isLoggedOut = true;
    });
  }

  doSignUp() {
    this.authTool.signup(this.signUpInfo)
    .then((resultFromApi) => {
        // clear form
        this.signUpInfo = {
        fullName: '',
        email: '',
        password: ''
      };

      // clear error message
      this.errorMessage = "";

      // redirect to /travelPost
      this.routerTool.navigate(['/travelPost']);
    })
    .catch((err) => {
      const parsedError = err.json();
      this.errorMessage = parsedError.message;
    });
  }

  doLogin() {
    this.authTool.login(this.loginInfo)
    .then((resultFromApi) => {
      // clear the form
      this.loginInfo = {
      email: '',
      password: ''
    };

    // clear the error message
    this.loginErrorMessage = "";

    // redirect to travelPost
    this.routerTool.navigate(['/travelPost']);
  })
  .catch((err) => {
      const parsedError = err.json();
      this.loginErrorMessage = parsedError.message;
    });
  }
}
