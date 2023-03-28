import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenGuard } from './service/admin/authen.guard';

const routes: Routes = [
  //{path: '', component: PageComponent},
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule), canActivateChild:[AuthenGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
