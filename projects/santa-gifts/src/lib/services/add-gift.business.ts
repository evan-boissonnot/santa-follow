import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { emptyNewGift, NewGift } from '../models/gift';
import { AddGiftInfra } from './add-gift.infra';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AddGiftBusiness {
  private readonly addGiftInfra = inject(AddGiftInfra);

  /**
   * Prepare an empty new gift
   */
  prepareOne(): WritableSignal<NewGift> {
    return signal(emptyNewGift);
  }

  /**
   * Save a new gift
   */
  async save(gift: NewGift): Promise<void> {
    await firstValueFrom(this.addGiftInfra.add(gift));
  }
}
