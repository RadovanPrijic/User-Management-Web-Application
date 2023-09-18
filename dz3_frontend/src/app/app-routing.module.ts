import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetUsersGuard } from './guards/get-users.guard';
import { LoginGuard } from './guards/login.guard';
import { PostUserGuard } from './guards/post-user.guard';
import { UpdateUserGuard } from './guards/update-user.guard';
import { LoginComponent } from './login/login.component';
import { PostUserComponent } from './post-user/post-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canDeactivate: [LoginGuard]
  },
  {
    path: "get_users",
    component: GetUsersComponent,
    canActivate: [GetUsersGuard]
  },
  {
    path: "post_user",
    component: PostUserComponent,
    canActivate: [PostUserGuard]
  },
  {
    path: "update_user/:id",
    component: UpdateUserComponent,
    canActivate: [UpdateUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
