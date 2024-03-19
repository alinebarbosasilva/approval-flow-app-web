import { Route } from "@angular/router";
import { WarehousemanComponent } from "./warehouseman.component";
import { WarehousemanUpdateComponent } from "./update/warehouseman-update.component";

export default [
  { path: '', component: WarehousemanComponent },
  { path: ':id', component: WarehousemanUpdateComponent },
] satisfies Route[]

