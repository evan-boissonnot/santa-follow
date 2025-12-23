import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { emptyNewGift, NewGift } from '../models/gift';

@Injectable()
export class AddGiftBusiness {
  /**
   * Prepare an empty new gift
   * @returns
   */
  prepareOne(): WritableSignal<NewGift> {
    return signal(emptyNewGift);
  }
}
