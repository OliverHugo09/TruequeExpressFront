import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../../models/login/app-user';
import { AppUserAuth } from '../../models/login/app-user-auth';
import { SecurityService } from '../../service/login/security.service';
import { AuthenGuard } from 'src/app/service/admin/authen.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl = '/admin';
  errorMessage = '';

  constructor(
    private service: SecurityService,
    private router: Router,
    private check: AuthenGuard
  ) {}

  ngOnInit(): void {}

  login(){
    this.errorMessage = '';
    this.service.login(this.user).subscribe(
      resp =>{
        this.securityObject = resp;
        this.router.navigateByUrl(this.returnUrl);
      }
    ),
    error => this.errorMessage = error
  }

}
