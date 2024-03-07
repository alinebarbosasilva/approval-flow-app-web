import { InjectionToken } from '@angular/core';

export const JWT_OPTIONS = new InjectionToken('JWT_OPTIONS');

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    },
    allowedDomains: ['localhost:3000'],
    disallowedRoutes: ['http://localhost:3000/login']
  };
}
