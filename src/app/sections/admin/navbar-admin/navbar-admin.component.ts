import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../service/login/security.service';
import { AppUserAuth } from '../../../models/login/app-user-auth';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  securityObject: AppUserAuth = null;

  constructor(private service: SecurityService) {
    this.securityObject = this.service.securityObject;
   }

    logout() {
    this.service.logout();
  }

  ngOnInit(): void {}

}
