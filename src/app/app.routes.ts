import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { HomeComponent }        from './home/home.component';
import { EventComponent }       from './event/event.component';

// Route Configuration
export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventComponent }
];


export const routing : ModuleWithProviders = RouterModule.forRoot(routes);