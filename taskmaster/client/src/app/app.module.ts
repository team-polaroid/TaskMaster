import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';

// Now UI imports

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjectNewComponent } from './project-new/project-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    //NowUI
    AdminLayoutComponent

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
  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
