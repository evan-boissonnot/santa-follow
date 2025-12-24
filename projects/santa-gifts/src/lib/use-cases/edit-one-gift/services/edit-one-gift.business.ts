import { inject, Injectable } from "@angular/core";
import { Gift } from "../../../models/gift";
import { ResultApi } from "dtbc-library";
import { EditOneGiftInfra } from "./edit-one-gift.infra";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditOneGiftBusiness {
  private readonly editOneGiftInfra = inject(EditOneGiftInfra);

  editOne(item: Gift): Promise<ResultApi<Gift>> {
    return firstValueFrom(this.editOneGiftInfra.save(item));
  }
}
