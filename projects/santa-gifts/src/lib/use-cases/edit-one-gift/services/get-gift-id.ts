import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

/**
 * Service to get the gift ID
 */
export interface GetGiftId {
  getOne(): Observable<number>;
}

export class GetGiftIdImpl implements GetGiftId {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly giftId$: Observable<number> = this.activatedRoute.params.pipe(
    map(params => Number(params['id']))
  );

  getOne(): Observable<number> {
    return this.giftId$;
  }
}
