import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from "@angular/common";
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    CommonModule,
],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UsersListComponent
  ],
})
export class ComponentsModule {  }
