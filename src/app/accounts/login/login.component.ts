import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../core/services/auth.service';
import { CookieService } from '../../services/cookie.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  submitted = false;
  returnUrl!: string;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService, private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['superadmin@gmail.com', [Validators.required, Validators.email]],
      password: ['1234567', Validators.required],
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == true) {
            this.cookieService.setCookie('currentUser', JSON.stringify(data.data), 1);
            this.cookieService.setCookie('token', JSON.stringify(data.token), 1);
            this.router.navigate(['/dashboard']);
            this.loading = false;
          } else {
            this.error = data.msg;
            this.loading = false;
          }
        },
        error => {

          this.error = error;
          this.loading = false;
        });
  }

}
