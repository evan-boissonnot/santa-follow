import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { AddGiftBusiness } from '../../services/add-gift.business';
import { customError, Field, form, submit } from '@angular/forms/signals';
import { emptyNewGift, newGiftSchema } from '../../models/gift';
import { AddGiftInfra } from '../../services/add-gift.infra';

@Component({
  selector: 'lib-add-new-gift',
  imports: [Field],
  templateUrl: './add-new-gift.html',
  styleUrl: './add-new-gift.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AddGiftInfra,
    AddGiftBusiness
  ]
})
export class AddNewGift {
  private readonly addGiftBusiness = inject(AddGiftBusiness);
  private readonly newGift = this.addGiftBusiness.prepareOne();
  protected readonly giftForm = form(this.newGift, newGiftSchema);


  async save(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if(this.giftForm().valid()) {
      await submit(this.giftForm, async (f) => {
        const returnApi = await this.addGiftBusiness.save(this.newGift());

        if(returnApi.error) {
          return customError({
            message: 'Une erreur est survenue lors de l\'ajout du cadeau. Veuillez réessayer plus tard.',
            fieldTree: this.giftForm.title
          });
        }

        return undefined;
      });
    }
  }
}
