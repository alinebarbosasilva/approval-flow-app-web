import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideEnvironmentNgxMask } from "ngx-mask";
import { appConfig } from "./app/app.config";


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideEnvironmentNgxMask(),
  ],
}).catch((err) => console.error(err));
