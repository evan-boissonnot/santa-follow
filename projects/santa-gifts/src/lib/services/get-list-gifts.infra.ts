import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftList } from '../models/gift';

@Injectable({
  providedIn: 'root',
})
export class GetListGiftsInfra {
  private readonly httpClient = inject(HttpClient);

  /**
   * Get all gifts from api
   * @returns
   */
  getAll(): Observable<GiftList> {
    return this.httpClient.get<GiftList>('/api/gifts');
  }
}
