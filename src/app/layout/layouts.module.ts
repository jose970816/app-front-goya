import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material/material.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BreadcrumbModule,
  ]
})
export class LayoutsModule { }
