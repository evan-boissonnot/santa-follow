import { Routes } from "@angular/router";
import { SantaGifts } from "./components/santa-gifts";
import { AddNewGift } from "./components/add-new-gift/add-new-gift";
import { EditOneGift } from "./use-cases/edit-one-gift/components/edit-one-gift/edit-one-gift";

export const giftsRoute: Routes = [
  {
    path: '',
    component: SantaGifts
  },
  {
    path: 'add-new-one',
    component: AddNewGift
  },
  {
    path: 'edit-one/:id',
    component: EditOneGift
  },
]
