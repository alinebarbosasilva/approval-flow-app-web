import { inject, PLATFORM_ID } from "@angular/core";
import { HttpInterceptorFn } from "@angular/common/http";
import { isPlatformBrowser } from "@angular/common";


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);

  const token = isPlatformBrowser(platformId) ? localStorage.getItem('access_token') : '';

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
