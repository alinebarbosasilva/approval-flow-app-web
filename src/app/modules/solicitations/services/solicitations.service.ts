import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Solicitation } from "../model/solicitation";
import { environment } from "../../../../environments/environment";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SolicitationsService {
  httpClient = inject(HttpClient);
  route = inject(ActivatedRoute);
  private readonly API = `${environment.API}/solicitations`;

  constructor() {
  }

  list() {
    return this.httpClient.get<Solicitation[]>(this.API);
  }

  create(solicitation: Omit<Solicitation, 'id'>) {
    return this.httpClient.post<Solicitation>(`${this.API}`, solicitation)
  }
}
