import {Routes} from '@angular/router';
import {RolesComponent} from './roles/roles.component';
import {ModuloComponent} from './modulo/modulo.component';
import {Not404Component} from './not404/not404.component';

export const pagesRoutes: Routes = [
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [certGuard] },
  /*{
    path: 'patient',
    component: PatientComponent,
    children: [
      { path: 'new', component: PatientEditComponent },
      { path: 'edit/:id', component: PatientEditComponent },
    ], canActivate: [certGuard]
  },*/
  /*{
    path: 'specialty',
    component: SpecialtyComponent,
    children: [
      { path: 'new', component: SpecialtyEditComponent },
      { path: 'edit/:id', component: SpecialtyEditComponent },
    ], canActivate: [certGuard]
  },*/
  //{ path: 'medic', component: MedicComponent, canActivate: [certGuard] },
  //{ path: 'exam', component: ExamComponent, canActivate: [certGuard] },
  //{ path: 'consult-wizard', component: ConsultWizardComponent, canActivate: [certGuard] },
  {path: 'roles', component: RolesComponent, /*canActivate: [certGuard]*/},
  {path: 'modulo', component: ModuloComponent, /*canActivate: [certGuard]*/},
  //{ path: 'report', component: ReportComponent, canActivate: [certGuard] },
  //{ path: 'not-403', component: Not403Component},
  { path: 'not-404', component: Not404Component}
];
