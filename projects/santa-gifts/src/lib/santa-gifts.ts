import { Component, inject } from '@angular/core';
import { GetListGiftsBusiness } from './services/get-list-gifts.business';
import { GetListGiftsInfra } from './services/get-list-gifts.infra';
import { fakeGetListGiftsInfra } from './services/__mocks__/fake-get-list-gifts.infra';

@Component({
  selector: 'lib-santa-gifts',
  imports: [],
  template: `
    @let list = value();

    @for(gift of list; track gift.id) {
      <div>
        <h3>{{ gift.name }}</h3>
        <p>{{ gift.description }}</p>
      </div>
    }
    @empty {
      <p>Pas de cadeau reçu du père noël :(</p>

        @if (isLoading()) {
         <i> (loading ...) </i>
        }
    }
  `,
  styles: ``,
  providers: [
    GetListGiftsBusiness,
    { provide: GetListGiftsInfra, useValue: fakeGetListGiftsInfra }
  ]
})
export class SantaGifts {
  private readonly getListGiftsBusiness = inject(GetListGiftsBusiness);
  protected readonly value = this.getListGiftsBusiness.value;
  protected readonly isLoading = this.getListGiftsBusiness.isLoading;
  protected readonly error = this.getListGiftsBusiness.error;
}
