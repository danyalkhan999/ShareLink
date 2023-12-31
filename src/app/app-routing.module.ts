import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { RegisterComponent } from './pages/home/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharelinkComponent } from './pages/sharelink/sharelink.component';
import { authGuard } from './Guard/auth.guard';
import { CreateProfileComponent } from './pages/sharelink/create-profile/create-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'sharelink',
    component: SharelinkComponent,
    canActivate: [authGuard],
    children: [{ path: 'create-profile', component: CreateProfileComponent }],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
