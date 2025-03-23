import {Routes} from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.routes').then((x) => x.pagesRoutes),
  },
  //{ path: '**', component: Not404Component}
];
