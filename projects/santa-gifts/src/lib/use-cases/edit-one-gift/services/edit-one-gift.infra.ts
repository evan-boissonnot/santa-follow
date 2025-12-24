import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResultApi } from "dtbc-library";
import { Gift } from "../../../models/gift";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditOneGiftInfra {
  private readonly http = inject(HttpClient);

  save(gift: Gift): Observable<ResultApi<Gift>> {
    return this.http.put<ResultApi<Gift>>(`/api/gifts/${gift.id}`, gift);
  }
}
