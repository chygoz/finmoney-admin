import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { LayoutComponent } from './includes/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { PasswordresetComponent } from './accounts/passwordreset/passwordreset.component';
import { NewpasswordresetComponent } from './accounts/newpasswordreset/newpasswordreset.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'passwordreset', component: PasswordresetComponent },
  { path: 'newpasswordreset/:id', component: NewpasswordresetComponent },
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
