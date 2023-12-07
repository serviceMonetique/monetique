import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./Guards/auth.guard";

const routes: Routes = [
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
