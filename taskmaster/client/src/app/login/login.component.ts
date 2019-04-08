import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from '../_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/dashboard'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';    // default to dashboard for foremen
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/projectmanager';    // default to dashboard for project managers

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    // need to add more authentication and routing to proper views for other roles other than formen

                    var check = localStorage.getItem('currentUser');
                    console.log(check);
                    var retrievedData = JSON.parse(check);
                    console.log(retrievedData)          

                    if (retrievedData.id == 1 ) {       // project manager id is 1
                      this.router.navigate(['projectmanager']);
                    }
                    else if (retrievedData.id == 2) {   // foremen id is 2
                      this.router.navigate([this.returnUrl]);
                    }
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
        //this.router.navigateByUrl('/dashboard');

    }
}