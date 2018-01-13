import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logoutError: string;


  constructor(
    private authTool: AuthService,
    private routerTool: Router
  ) { }

  ngOnInit() {
  }
  logMeOut() {
    this.authTool.logout()
      .then(() => {
          this.routerTool.navigate(['/']);
      })
      .catch(() => {
        this.logoutError = 'Log out failed';
      });
  }
}
