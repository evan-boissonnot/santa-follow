import { inject, Injectable, linkedSignal, signal, Signal, WritableSignal } from "@angular/core";
import { GetGiftIdImpl } from "./get-gift-id";
import { GetOneGiftInfra } from "./get-one-gift.infra";
import { switchMap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { Gift } from "../../../models/gift";

@Injectable()
export class GetOneGiftBusiness {
  private readonly getGiftId = inject(GetGiftIdImpl);
  private readonly getOneGiftInfra = inject(GetOneGiftInfra);

  private readonly oneGift$ = this.getGiftId.getOne().pipe(
    switchMap(id => this.getOneGiftInfra.getOne(id))
  );

  private readonly giftSignal = toSignal(this.oneGift$);

  getOne(): Signal<Gift | undefined> {
    return this.giftSignal;
  }

}
