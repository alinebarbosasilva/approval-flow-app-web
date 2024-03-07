import { Component, inject } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { MatCard, MatCardContent } from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { MatFormField, MatInput } from "@angular/material/input";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { SolicitationsService } from "../services/solicitations.service";

@Component({
  selector: 'app-solicitations-create',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatToolbar,
    MatInput,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './solicitations-create.component.html',
  styleUrl: './solicitations-create.component.scss'
})
export class SolicitationsCreateComponent {
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(SolicitationsService)

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    description: ['', Validators.required],
    price: [null, [Validators.required]],
  })

  constructor() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.create(this.form.getRawValue() as any).subscribe(()=>{
        this.router.navigate(['/solicitations']);
      });
    }
  }

  back(){
    this.router.navigate(['/solicitations']);
  }
}
