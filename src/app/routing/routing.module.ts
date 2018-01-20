import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DepartmentComponent } from '../department/department.component';
import { CustomerComponent } from '../customer/customer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/guards/auth.guard';

import { CommentLoadGuard } from '../service/comment/comment-load.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard], },
      { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
      { path: 'comments', loadChildren: '../comments/comments.module#CommentsModule', canLoad: [CommentLoadGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, //set default route
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
