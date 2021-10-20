import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "../../shared.service";
import { CookieService } from '../../services/cookie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuToggleNavheader: boolean = false;
  user: any;
  userName: any;
  constructor(private router: Router, private sharedService: SharedService, private cookieService: CookieService) {


  }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.getCookie('currentUser') || '');

  }

  hamburgerStatus() {
    if (this.menuToggleNavheader == false) {
      this.menuToggleNavheader = true;
    } else {
      this.menuToggleNavheader = false;
    }
    if (this.menuToggleNavheader) {

    } else {

    }

    this.sharedService.updateMenuStatus(this.menuToggleNavheader);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.cookieService.deleteCookie('token');
    this.cookieService.deleteCookie('currentUser');
    this.router.navigate(['/']);
  }

}
