import { delay, Observable, of } from "rxjs"
import { GiftList } from "../../models/gift"

/**
 * Fake implementation of GetListGiftsInfra for testing purposes
 */
export const fakeGetListGiftsInfra = {
  getAll: (): Observable<GiftList> => {
    return of([
      { id: 1, title: 'Toy Car', description: 'A small toy car' },
      { id: 2, title: 'Doll', description: 'A beautiful doll' },
      { id: 3, title: 'Puzzle', description: 'A 1000-piece puzzle' }
     ]).pipe(delay(500))
  }
}
