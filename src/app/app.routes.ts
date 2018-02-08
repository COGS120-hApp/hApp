import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { HomeComponent }        from './home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'home', component: HomeComponent }
];


export const routing : ModuleWithProviders = RouterModule.forRoot(routes);