import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { ProjectmanagerComponent } from '../../projectmanager/projectmanager.component'; // added 
import { ProjectListComponent} from "../../project-list/project-list.component";
import { LogoutComponent } from '../../logout/logout.component';      // added

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ProjectListComponent,
    LogoutComponent,         // added
    ProjectmanagerComponent  // added 
  ]
})

export class AdminLayoutModule {}
