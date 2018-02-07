import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuthenticated(isAuth : boolean){
    if(isAuth === true)
      console.log("User successfully authenticated");
    else
      console.log("Authentication failed");
  }
}
