import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  visible: boolean = false;
  menuToggleNavheader: boolean = false;
  constructor(private sharedService: SharedService) {


  }
  ngAfterContentChecked() {
    this.menuToggleNavheader = this.sharedService.menuToggleNavheader;
  }


  ngOnInit(): void {
  }

  clickMe() {
    this.visible = false;
  }

  change(value: boolean) {
    console.log(value);
  }

}
