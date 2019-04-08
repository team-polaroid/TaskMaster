import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
//import { AuthGuard } from './auth.guard';
import { AuthGuard } from './_guards'

// Imports from nowUI

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// AdminLayoutcomponent == sidebar?
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  //{ path: 'dashboard', redirectTo: 'dashboard'},
  //{ path: 'adminLayout', component: AdminLayoutComponent, children: [{path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}], canActivate: [AuthGuard] }
  
  // from NowUI
  //{ path: 'dashboard', redirectTo: 'dashboard', canActivate: [AuthGuard] },
  { path: 'dashboard', redirectTo: 'dashboard', canActivate: [AuthGuard, NgxPermissionsGuard], 
  data: {
      permissions: {
          only: 'FOREMEN',
      } 
  }},

  { path: '', component: AdminLayoutComponent, children: [{path: '', 
  loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}], canActivate: [AuthGuard] },
  
  //{ path: '**', redirectTo: 'login' },

  //{ path: 'upgrade', component: UpgradeComponent, canActivate: [AuthGuard]}   // <--- bricks login when implementing


];

@NgModule({
  // enable tracing is for debugging
  imports: [RouterModule.forRoot(routes,{enableTracing: true}), CommonModule, BrowserModule], // added CommonModule and BrowserModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
