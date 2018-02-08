import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticatorService {

  constructor(private router: Router) {
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

}
