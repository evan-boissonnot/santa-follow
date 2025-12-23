import { Routes } from "@angular/router";
import { SantaGifts } from "./components/santa-gifts";
import { AddNewGift } from "./components/add-new-gift/add-new-gift";

export const giftsRoute: Routes = [
  {
    path: '',
    component: SantaGifts
  },
  {
    path: 'add-new-one',
    component: AddNewGift
  }
]
