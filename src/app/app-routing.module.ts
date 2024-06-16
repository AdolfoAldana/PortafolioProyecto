import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { App2Component } from './app2/app2.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'app2', component: App2Component},
  { path: '', redirectTo: 'App2Component',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
