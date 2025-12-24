import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal, WritableSignal } from '@angular/core';
import { GetOneGiftBusiness } from '../../services/get-one-gift.business';
import { GetGiftIdImpl } from '../../services/get-gift-id';
import { GetOneGiftInfra } from '../../services/get-one-gift.infra';
import { customError, Field, form, submit } from '@angular/forms/signals';
import { Gift, giftSchema, newGiftSchema } from '../../../../models/gift';
import { EditOneGiftInfra } from '../../services/edit-one-gift.infra';
import { EditOneGiftBusiness } from '../../services/edit-one-gift.business';
import { fakeGetOneGift } from '../../services/__mocks__/fake-get-one-gift';

@Component({
  selector: 'lib-edit-one-gift',
  imports: [Field],
  templateUrl: './edit-one-gift.html',
  styleUrl: './edit-one-gift.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    GetGiftIdImpl,
    { provide: GetOneGiftInfra, useValue: fakeGetOneGift },
    GetOneGiftBusiness,
    EditOneGiftInfra,
    EditOneGiftBusiness
  ]
})
export class EditOneGift {
  private readonly editGiftBusiness = inject(EditOneGiftBusiness);
  private readonly giftSignal = inject(GetOneGiftBusiness).getOne();

  protected readonly giftForm = form(this.giftSignal, giftSchema);

  async save(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const giftForm = this.giftForm();

    if(giftForm && giftForm.valid()) {
      await submit(this.giftForm, async (f) => {
        const value = giftForm.value();

        if(! value) {
          return undefined;
        }

        const returnApi = await this.editGiftBusiness.editOne(value);

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
