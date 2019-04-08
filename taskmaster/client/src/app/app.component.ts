import { Component, OnInit} from '@angular/core';

import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private permissionService: NgxPermissionsService, private http: HttpClient) {}

  ngOnInit(): void {
    const perm = ["FOREMEN", "PROJECT_MANAGER", "ADMIN"];

    this.permissionService.loadPermissions(perm);

    this.http.get('url').subscribe((permissions) => { 
      this.permissionService.loadPermissions(perm);
    })
  }

}
