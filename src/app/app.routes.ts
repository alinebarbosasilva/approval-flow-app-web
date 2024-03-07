import { Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";


export const routes: Routes = [
  {
    path: 'admins',
    loadChildren: () => import('./modules/admins/admins-routes')
  },
  {
    path: 'warehouseman',
    loadChildren: () => import('./modules/warehouseman/warehouseman-routes')
  },
  {
    path: 'solicitations',
    loadChildren: () => import('./modules/solicitations/solicitations-routes')
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },

];
