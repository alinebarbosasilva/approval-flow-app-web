import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Solicitation } from "../../solicitations/model/solicitation";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  httpClient = inject(HttpClient);
  private readonly API = `${environment.API}/admin/solicitations`;


  list(params: any = {}) {
    return this.httpClient.get<Solicitation[]>(this.API, {params});
  }

}
