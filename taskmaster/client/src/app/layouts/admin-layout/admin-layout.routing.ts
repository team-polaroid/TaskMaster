import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ProjectListComponent} from '../../project-list/project-list.component';

import { LogoutComponent } from '../../logout/logout.component';
import { ProjectmanagerComponent } from '../../projectmanager/projectmanager.component';
import {ProjectNewComponent} from "../../project-new/project-new.component";


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'projectmanager', component: ProjectmanagerComponent },
    { path: 'project-list',   component: ProjectListComponent },
    { path: 'project-new',   component: ProjectNewComponent },
    { path: 'logout',         component: LogoutComponent}

];
