import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";
import { CookieService } from '../../services/cookie.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuToggleNavheader: boolean = false;
  dashboard: boolean = true;
  tradegroups: boolean = false;
  kycdata: boolean = false;
  users: boolean = false;
  analytics: boolean = false;
  notifications: boolean = false;
  chatsupport: boolean = false;
  settings: boolean = false;
  apps: any;
  constructor(private sharedService: SharedService, private cookieService: CookieService) {
    localStorage.setItem('dashboard', JSON.stringify(this.dashboard));
    localStorage.setItem('tradegroups', JSON.stringify(this.tradegroups));
    localStorage.setItem('kycdata', JSON.stringify(this.kycdata));
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('analytics', JSON.stringify(this.analytics));
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
    localStorage.setItem('chatsupport', JSON.stringify(this.chatsupport));
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  ngAfterContentChecked() {
    this.menuToggleNavheader = this.sharedService.menuToggleNavheader;
  }


  menuStatus(event: any, item: any): void {
    if (item == "dashboard") {
      if (this.dashboard == true) {
        this.dashboard = false;
      } else {
        this.dashboard = true;
      }

      this.tradegroups = false;
      this.kycdata = false;
      this.users = false;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = false;
    }
    if (item == "tradegroups") {
      this.dashboard = false;
      this.tradegroups = true;
      this.kycdata = false;
      this.users = false;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = false;

    }
    if (item == "kycdata") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = true;
      this.users = false;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = false;
    }
    if (item == "users") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = false;
      this.users = true;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = false;
    }
    if (item == "analytics") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = false;
      this.users = false;
      this.analytics = true;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = false;
    }
    if (item == "notifications") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = false;
      this.users = false;
      this.analytics = false;
      this.notifications = true;
      this.chatsupport = false;
      this.settings = false;
    }
    if (item == "chatsupport") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = false;
      this.users = false;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = true;
      this.settings = false;
    }
    if (item == "settings") {
      this.dashboard = false;
      this.tradegroups = false;
      this.kycdata = false;
      this.users = false;
      this.analytics = false;
      this.notifications = false;
      this.chatsupport = false;
      this.settings = true;
    }
    localStorage.setItem('dashboard', JSON.stringify(this.dashboard));
    localStorage.setItem('tradegroups', JSON.stringify(this.tradegroups));
    localStorage.setItem('kycdata', JSON.stringify(this.kycdata));
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('analytics', JSON.stringify(this.analytics));
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
    localStorage.setItem('chatsupport', JSON.stringify(this.chatsupport));
    localStorage.setItem('settings', JSON.stringify(this.settings));



  }

  ngOnInit(): void {
    this.dashboard = JSON.parse(localStorage.getItem('dashboard') || '');
    this.tradegroups = JSON.parse(localStorage.getItem('tradegroups') || '');
    this.kycdata = JSON.parse(localStorage.getItem('kycdata') || '');
    this.users = JSON.parse(localStorage.getItem('users') || '');
    this.analytics = JSON.parse(localStorage.getItem('analytics') || '');
    this.notifications = JSON.parse(localStorage.getItem('notifications') || '');
    this.chatsupport = JSON.parse(localStorage.getItem('chatsupport') || '');
    this.settings = JSON.parse(localStorage.getItem('settings') || '');

  }



}
