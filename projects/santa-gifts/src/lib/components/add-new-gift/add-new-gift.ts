import { Component, inject, signal } from '@angular/core';
import { AddGiftBusiness } from '../../services/add-gift.business';
import { Field, form } from '@angular/forms/signals';
import { emptyNewGift } from '../../models/gift';

@Component({
  selector: 'lib-add-new-gift',
  imports: [Field],
  templateUrl: './add-new-gift.html',
  styleUrl: './add-new-gift.css',
  providers: [
    AddGiftBusiness
  ]
})
export class AddNewGift {
  private readonly addGiftBusiness = inject(AddGiftBusiness);
  private readonly newGift = this.addGiftBusiness.prepareOne();
  protected readonly giftForm = form(this.newGift);

}
