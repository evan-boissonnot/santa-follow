import { delay, Observable, of } from "rxjs";
import { Gift } from "../../../../models/gift";

/**
 * Fake service to get one gift by ID for testing purposes
 */
export const fakeGetOneGift = {
  getOne(id: number): Observable<Gift> {
    return of({
      id,
      title: 'Fake Gift Title',
      description: 'This is a fake gift description used for testing purposes.'
    }).pipe(delay(100));
  }
}
