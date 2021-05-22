import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'login', loadChildren: '../login/login.module#LoginModule' }

];

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forRoot(routes),
  ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
