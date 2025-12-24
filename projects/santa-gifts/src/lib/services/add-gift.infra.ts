import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift, NewGift } from '../models/gift';
import { ResultApi } from 'dtbc-library';

@Injectable()
export class AddGiftInfra {
  private readonly httpClient = inject(HttpClient);

  /**
   * Add a new gift via API
   */
  add(gift: NewGift): Observable<ResultApi<Gift>> {
    return this.httpClient.post<ResultApi<Gift>>('/api/gifts', gift);
  }
}
