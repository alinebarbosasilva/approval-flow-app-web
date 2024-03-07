import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Solicitation } from "../../solicitations/model/solicitation";

@Injectable({
  providedIn: 'root'
})
export class WarehousemanService {
  httpClient = inject(HttpClient);
  private readonly API = `${environment.API}/warehouseman/solicitations`;

  constructor() {
  }

  list(params: any = {}) {
    return this.httpClient.get<Solicitation[]>(this.API, {params});
  }

  single(id: number) {
    return this.httpClient.get(`${this.API}/${id}`)
  }

  approve(id: number, observation?: string) {
    return this.httpClient.patch(`${this.API}/${id}/approve`, {observation});
  }

  reprove(id: number, observation: string) {
    return this.httpClient.patch(`${this.API}/${id}/reprove`, {observation});
  }
}
