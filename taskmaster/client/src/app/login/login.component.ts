import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { ActivatedRoute,Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute,) { }

  loginForm: FormGroup;
  isSubmitted = false;

  // loading = false;
  // submitted = false;
  // returnUrl: string;
  // error = '';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

            // // reset login status
            this.authService.logout();

            // // get return url from route parameters or default to '/'
            // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/admin');
    this.router.navigateByUrl('/dashboard')
  }
  
}
