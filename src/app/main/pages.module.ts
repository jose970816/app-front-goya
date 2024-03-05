import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BandejaComponent } from './bandeja/bandeja.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  declarations: [
    BandejaComponent,
    DashboardComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  providers: [],
})
export class PagesModule { }
