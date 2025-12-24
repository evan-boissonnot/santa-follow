import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gift } from "../../../models/gift";

@Injectable()
export class GetOneGiftInfra {
  private readonly http = inject(HttpClient);

  /**
   * Get one gift by ID
   * @param id Gift ID
   * @returns Observable of Gift
   */
  getOne(id: number): Observable<Gift> {
    return this.http.get<Gift>(`/api/gifts/${id}`);
  }

}
