import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { TravelPostService } from '../services/travel-post.service';

@Component({
  selector: 'app-travel-post',
  templateUrl: './travel-post.component.html',
  styleUrls: ['./travel-post.component.css']
})
export class TravelPostComponent implements OnInit {

  currentUser: any = {};

  logoutError: string;

  travelPostArray: any[] = [];
  travelPostError: string;

  isShowingForm: boolean = false;

  travelPostInfo = {
    travelTitle: "",
    travelDescription: "",
  };

  saveError: string;

  myNewUploader = new FileUploader({
    url: environment.apiBase + '/api/travelPost',
    itemAlias: 'travelPicture'
  });

  baseUrl = environment.apiBase;

  constructor(
    private authTool: AuthService,
    private travelPostTool: TravelPostService,
    private routerTool: Router
  ) { }

  ngOnInit() {
    this.authTool.checklogin()
    .then((userFromApi) => {
        this.currentUser = userFromApi;
        this.getTravelPost();
    })
    .catch(() => {
      this.routerTool.navigate(['/']);
    });
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

  getTravelPost() {
    this.travelPostTool.allTravelPost()
    .subscribe(
      (allTheTravelPost) => {
          this.travelPostArray = allTheTravelPost;
      },
      () => {
          this.travelPostError = 'Sorry no travel post';
      }
    );
  }

  showTravelPostForm() {
    this.isShowingForm = true;
  }

  saveNewTravelPost() {
    // If no picture, regular Ajax upload
    if (this.myNewUploader.getNotUploadedItems().length === 0) {
      this.saveTravelPostNoPicture();
    }

    // else, upload picture with uploader
    else {
      this.saveTravelPostWithPicture();
    }
  }

private saveTravelPostNoPicture() {
  this.travelPostTool.newTravelPost(this.travelPostInfo)
    .subscribe(
      (newTravelPostFromApi) => {
          this.travelPostArray.push(newTravelPostFromApi);
          this.isShowingForm = false;
          this.travelPostInfo = {
            travelTitle: "",
            travelDescription: ""
          };
          this.saveError = "";
      },
      (err) => {
          this.saveError = 'Error saving travel post';
      }
    );
 }

 private saveTravelPostWithPicture() {
   this.myNewUploader.onBuildItemForm = (item, form) => {
      form.append('travelTitle', this.travelPostInfo.travelTitle);
      form.append('travelDescription', this.travelPostInfo.travelDescription);
   };

   this.myNewUploader.onSuccessItem = (item, response) => {
      console.log(item);
      const newTravelPostFromApi = JSON.parse(response);
      this.travelPostArray.push(newTravelPostFromApi);
      this.isShowingForm = false;
      this.travelPostInfo = {
        travelTitle: "",
        travelDescription: ""
      };
      this.saveError = "";
   };

   this.myNewUploader.onErrorItem = (item, response) => {
      console.log(item, response);
      this.saveError = 'Error saving travel post';
   };

   // this is the function that initiates the AJAX request
   this.myNewUploader.uploadAll();
  }
}
