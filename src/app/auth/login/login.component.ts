import { Component, inject } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatAnchor, MatButton } from "@angular/material/button";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormField,
    MatInput, MatButton, MatAnchor,
    MatLabel, ReactiveFormsModule, MatHint],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder)
  loginService = inject(LoginService)
  router = inject(Router)
  form = this.formBuilder.nonNullable.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor() {
  }

  navigateToRoutes(user: any) {
    if (user.role === 'requester') this.router.navigateByUrl('solicitations');
    else if (user.role === 'warehouseman') this.router.navigateByUrl('warehouseman');
    else if  (user.role === 'admin') this.router.navigateByUrl('admins');
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginService.login(this.form.getRawValue()).subscribe((resp: any) => {
        localStorage.setItem('access_token', resp.token);
        this.navigateToRoutes(resp.user);
      })
    }
  }
}
