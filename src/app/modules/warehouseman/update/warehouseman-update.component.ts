import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { MatCard, MatCardContent } from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { SolicitationsService } from "../../solicitations/services/solicitations.service";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { NgxMaskDirective } from "ngx-mask";
import { WarehousemanService } from "../services/warehouseman.service";
import { MatOption, MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-warehouseman-update',
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
    RouterOutlet,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    NgxMaskDirective,
    MatButton,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './warehouseman-update.component.html',
  styleUrl: './warehouseman-update.component.scss'
})
export class WarehousemanUpdateComponent implements OnInit {
  id!: number
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  route = inject(ActivatedRoute)
  service = inject(WarehousemanService)


  form = this.formBuilder.nonNullable.group({
    name: [''],
    description: [''],
    price: [null],
    action: [null, [Validators.required]],
    observation: [null],
  })

  constructor() {
  }

  onSubmit() {
    if (this.form.valid) {
     const value = this.form.controls.action.value
     const observation = this.form.controls.observation.value
      if(value === 1) {
        this.service.approve(this.id, observation!).subscribe()
      }else {
        this.service.reprove(this.id, observation!).subscribe()
      }
    }
  }

  back(){
    this.router.navigate(['/warehouseman']);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.service.single(this.id).subscribe((resp)=> {
      this.form.patchValue(resp)
      this.form.disable()
      this.form.controls.action.enable()
      this.form.controls.observation.enable()
    })
  }
}
