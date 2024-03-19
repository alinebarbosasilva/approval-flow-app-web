import { Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { solicitationsGuard } from "./guards/solicitations.guard";
import { adminGuard } from "./guards/admin.guard";
import { warehousemanGuard } from "./guards/warehouseman.guard";


export const routes: Routes = [
  {
    path: 'admins',
    loadChildren: () => import('./modules/admins/admins-routes'),
    canActivate: [adminGuard],
  },
  {
    path: 'warehouseman',
    loadChildren: () => import('./modules/warehouseman/warehouseman-routes'),
    canActivate: [warehousemanGuard],
  },
  {
    path: 'solicitations',
    loadChildren: () => import('./modules/solicitations/solicitations-routes'),
    canActivate: [solicitationsGuard],
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login',
  },
  {
    path: 'login', component: LoginComponent,
  }
];
