import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from "rxjs";
import { Credentials } from "../models/credentials";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http = inject(HttpClient)
  router = inject(Router)

  get isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }

  urlApi = `${environment.API}`;

  login(credentials: Credentials) {
    return this.http.post(`${this.urlApi}/login`, credentials).pipe(
    );
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/logout`).pipe(
      tap(() => localStorage.removeItem("access_token")),
      take(1)
    );
  }
}
