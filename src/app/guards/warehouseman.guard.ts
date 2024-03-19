import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from "../auth/services/login.service";
import { isPlatformBrowser } from "@angular/common"


export const warehousemanGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) return true;

  const user = JSON.parse(localStorage.getItem('user')!);

  if (inject(LoginService).isLoggedIn && user.role === 'warehouseman') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
