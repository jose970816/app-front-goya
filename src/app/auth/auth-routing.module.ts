import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('../layout/layouts.module').then(m => m.LayoutsModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
