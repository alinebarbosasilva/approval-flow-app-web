import { Route } from "@angular/router";
import { SolicitationsComponent } from "./solicitations.component";

import { SolicitationsCreateComponent } from "./create/solicitations-create.component";


export default [
  { path: '', component: SolicitationsComponent },
  { path: 'new', component: SolicitationsCreateComponent },
] satisfies Route[]

