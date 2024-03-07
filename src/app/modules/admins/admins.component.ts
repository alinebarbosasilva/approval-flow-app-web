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
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { MatButton, MatIconButton } from "@angular/material/button";
import { Solicitation } from "../solicitations/model/solicitation";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/autocomplete";
import { MatSelect } from "@angular/material/select";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { AdminsService } from "./services/admins.service";

@Component({
  selector: 'app-admins',
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
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatInput,
    MatButton,
  ],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent {
  formBuilder = inject(FormBuilder)
  displayedColumns = ['id', 'name', 'description'];
  adminsService = inject(AdminsService)
  solicitations: Observable<Solicitation[]> = this.adminsService.list();

  formFilters = this.formBuilder.group({
    status: [null],
    name: [null],
    description: [null],
  })

  filter() {
    this.solicitations = this.adminsService.list(this.formFilters.getRawValue());
  }
}
