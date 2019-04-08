import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../auth.service';
import { AuthenticationService } from '../_services'

@Component({
  selector: 'app-logout',
  //templateUrl: './logout.component.html',
  template: '',
  //styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    //this.router.navigateByUrl('/login');
  }

}
