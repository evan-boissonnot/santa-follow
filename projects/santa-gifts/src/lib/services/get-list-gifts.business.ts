import { inject, Injectable } from '@angular/core';
import { GetListGiftsInfra } from './get-list-gifts.infra';
import { rxResource } from '@angular/core/rxjs-interop';
import { emptyGiftList } from '../models/gift';

@Injectable()
export class GetListGiftsBusiness {
  private readonly getListGiftsInfra = inject(GetListGiftsInfra);
  private readonly gifts$ = this.getListGiftsInfra.getAll();

  private readonly giftsResource = rxResource({
    defaultValue: emptyGiftList,
    stream: () => this.gifts$
  })

  get value() {
    return this.giftsResource.value;
  }

  get isLoading() {
    return this.giftsResource.isLoading;
  }

  get error() {
    return this.giftsResource.error;
  }
}
