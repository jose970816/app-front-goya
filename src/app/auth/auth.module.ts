import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { PagesModule } from "../main/pages.module";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    LayoutModule,
  ],
  providers: [
  ],
})
export class AuthModule { }
