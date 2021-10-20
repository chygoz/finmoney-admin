import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  menuToggleNavheader: any;
  constructor() {
    this.menuToggleNavheader;
  }
  updateMenuStatus(menuStatus: boolean) {
    this.menuToggleNavheader = menuStatus;

  }
}
