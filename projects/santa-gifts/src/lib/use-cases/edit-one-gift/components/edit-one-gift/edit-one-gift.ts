import { ChangeDetectionStrategy, Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { GetOneGiftBusiness } from '../../services/get-one-gift.business';
import { GetGiftIdImpl } from '../../services/get-gift-id';
import { GetOneGiftInfra } from '../../services/get-one-gift.infra';
import { customError, Field, form, submit } from '@angular/forms/signals';
import { giftSchema, newGiftSchema } from '../../../../models/gift';
import { EditOneGiftInfra } from '../../services/edit-one-gift.infra';
import { EditOneGiftBusiness } from '../../services/edit-one-gift.business';

@Component({
  selector: 'lib-edit-one-gift',
  imports: [Field],
  templateUrl: './edit-one-gift.html',
  styleUrl: './edit-one-gift.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    GetGiftIdImpl,
    GetOneGiftInfra,
    GetOneGiftBusiness,
    EditOneGiftInfra,
    EditOneGiftBusiness
  ]
})
export class EditOneGift {
  private readonly editGiftBusiness = inject(EditOneGiftBusiness);
  private readonly giftSignal = inject(GetOneGiftBusiness).getOne();
  protected readonly gitFormSignal = computed(() => {
    const gift = this.giftSignal();

    if(gift) {
      const giftSignal = signal(gift);
      return form(giftSignal, giftSchema);
    }

    return null;
  });

  async save(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const giftForm = this.gitFormSignal();

    if(giftForm && giftForm().valid()) {
      await submit(giftForm, async (f) => {
        const returnApi = await this.editGiftBusiness.editOne(giftForm().value());

        if(returnApi.error) {
          return customError({
            message: 'Une erreur est survenue lors de l\'ajout du cadeau. Veuillez réessayer plus tard.',
          });
        }

        return undefined;
      });
    }
  }
  //protected readonly giftForm = form(this.giftSignal, giftSchema);
}
