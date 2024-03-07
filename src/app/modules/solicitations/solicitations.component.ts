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
import { Solicitation } from "./model/solicitation";
import { SolicitationsService } from "./services/solicitations.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { MatButton, MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-solicitations',
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
    MatIconButton,
    RouterOutlet,
    MatButton,
  ],
  templateUrl: './solicitations.component.html',
  styleUrl: './solicitations.component.scss'
})
export class SolicitationsComponent {
  displayedColumns = ['id', 'name', 'description'];
  solicitationsService = inject(SolicitationsService)
  private router = inject(Router)
  route = inject(ActivatedRoute);
  solicitations: Observable<Solicitation[]> = this.solicitationsService.list();

  constructor() {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
