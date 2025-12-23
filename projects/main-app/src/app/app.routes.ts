import { Routes } from '@angular/router';
import { giftsRoute } from 'santa-gifts';

export const routes: Routes = [
  {
    path: 'gifts',
    //loadChildren: () => import('santa-gifts').then(m => m.giftsRoute)
    children: giftsRoute
  }
];
