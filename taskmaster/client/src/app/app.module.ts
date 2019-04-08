import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';

// Now UI imports

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { NgxPermissionsModule } from 'ngx-permissions';

import { fakeBackendProvider } from './_helpers'
import { JwtInterceptor, ErrorInterceptor } from './_helpers'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    //NowUI
    AdminLayoutComponent,

    //LogoutComponent //<--- when trying to implement, bricks login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  // NowUI imports
  BrowserAnimationsModule,
  HttpClientModule,
  ComponentsModule,
  RouterModule,
  NgbModule,
  ToastrModule.forRoot(),

  NgxPermissionsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],  
    bootstrap: [AppComponent]
})
export class AppModule { }
