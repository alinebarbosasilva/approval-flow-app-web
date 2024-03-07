import { inject, Injectable } from '@angular/core';
import { Observable, take, tap } from "rxjs";
import { Credentials } from "../models/credentials";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  http = inject(HttpClient)
  router = inject(Router)


  urlApi = 'http://localhost:3000';


  login(credentials: Credentials){
    return this.http.post(`${this.urlApi}/login`, credentials).pipe(take(1))
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/logout`);
  }
}
