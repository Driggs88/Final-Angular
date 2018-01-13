import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TravelPostComponent } from './travel-post/travel-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'travelPost',
    component: TravelPostComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'promo',
    component: PromotionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
