import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//import { AuthService } from '../../auth.service';
import { AuthenticationService } from '../../_services'

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

declare interface RouteInfo2 {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/project-list', title: 'Projects',  icon:'business_briefcase-24', class: '' },

    //{ path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },


    //{ path: '/projects-list', title: 'Projects List', icon:'education_atom', class: '' }

    /*{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },*/
    { path: '/logout', title: 'Log Out',  icon:'objects_spaceship', class: 'active active-pro' }

];

export const ROUTES2: RouteInfo2[] = [
    { path: '/projectmanager', title: 'PMDashboard',  icon: 'design_app', class: '' },
    { path: '/project-list', title: 'Projects',  icon:'business_briefcase-24', class: '' },

    //{ path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },


    //{ path: '/projects-list', title: 'Projects List', icon:'education_atom', class: '' }

    /*{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },*/
    { path: '/logout', title: 'Log Out',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    var check = localStorage.getItem('currentUser');
    console.log(check);
    var retrievedData = JSON.parse(check);
    console.log(retrievedData)          

    if (retrievedData.id == 1 ) {       // project manager id is 1
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }
    else if (retrievedData.id == 2) {   // foremen id is 2
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
  }
  
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
