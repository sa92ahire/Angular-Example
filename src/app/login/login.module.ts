import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', component: LoginComponentComponent },
  { path: 'signup', component: LoginComponentComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponentComponent]
})
export class LoginModule { }
