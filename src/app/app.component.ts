import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JwtModule} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JwtModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'approval-flow-application';
}
