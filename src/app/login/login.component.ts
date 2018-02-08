import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticatorService) { }

  ngOnInit() {
  }

  onLogin() : void {
    this.authService.navigateToHome();
  }

}
