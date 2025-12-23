import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift, NewGift } from '../models/gift';

@Injectable({
  providedIn: 'root',
})
export class AddGiftInfra {
  private readonly httpClient = inject(HttpClient);

  /**
   * Add a new gift via API
   */
  add(gift: NewGift): Observable<Gift> {
    return this.httpClient.post<Gift>('/api/gifts', gift);
  }
}
