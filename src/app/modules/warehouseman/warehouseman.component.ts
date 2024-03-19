import { Component, inject } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import { MatIcon } from "@angular/material/icon";
import { MatCard, MatCardHeader, MatCardModule } from "@angular/material/card";
import { WarehousemanService } from "./services/warehouseman.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { MatButton, MatIconButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { Solicitation } from "../solicitations/model/solicitation";
import { LoginService } from "../../auth/services/login.service";

@Component({
  selector: 'app-warehouseman',
  standalone: true,
  imports: [
    MatToolbar,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatCard,
    MatCardHeader,
    MatColumnDef,
    MatTableModule,
    MatCardModule,
    AsyncPipe,
    MatButton,
    MatIconButton,
  ],
  templateUrl: './warehouseman.component.html',
  styleUrl: './warehouseman.component.scss'
})
export class WarehousemanComponent {
  loginService = inject(LoginService)
  private router = inject(Router)
  solicitationsService = inject(WarehousemanService)

  displayedColumns = ['id', 'name', 'description', 'actions'];
  solicitations: Observable<Solicitation[]> = this.solicitationsService.list();

  constructor() {
  }

  navigateToSingle(item: any) {
    this.router.navigate([`/warehouseman/${item.id}`]);
  }

  logout(){
    this.loginService.logout().subscribe(()=>{
      this.router.navigate(['/login'])
    })
  }

}
