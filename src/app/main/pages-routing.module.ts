import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaComponent } from './bandeja/bandeja.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'bandeja',
    data: { breadcrumb: 'Bandeja' },
    children: [
      {
        path: 'bandeja-tareas',
        component: BandejaComponent,
        data: { breadcrumb: 'Bandeja de Tareas' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
