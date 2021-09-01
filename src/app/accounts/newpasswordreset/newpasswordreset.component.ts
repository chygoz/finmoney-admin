import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../core/services/auth.service';
import { MustMatch } from '../../_helpers/must-match.validator';
@Component({
  selector: 'app-newpasswordreset',
  templateUrl: './newpasswordreset.component.html',
  styleUrls: ['./newpasswordreset.component.scss']
})
export class NewpasswordresetComponent implements OnInit {

  resetForm: FormGroup|any;
  _id:any;
  submitted = false;
  form1Submit: boolean = false;
  error = '';
  randomcode:any;
  success = '';
  errorMsg = '';
  successMsg = '';
  loading = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.randomcode = params.id;
      } else {
        this.router.navigate(['reset-password']);
      }
    });


    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      })
  }

  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.loading = true;
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    this.resetForm.value.randomcode = this.randomcode;
    this.authenticationService.resetPassword(this.resetForm.value).subscribe((resp) => {
      if (!resp.status) {
        this.errorMsg = resp.msg;
        this.successMsg = "";
        this.loading = false;
      } else {
        this.loading = false;
        this.resetForm.reset()
        this.errorMsg = "";
        this.successMsg = "Password reset successfully, Please try to login with new reset password";

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);


      }
    })
  }

}


