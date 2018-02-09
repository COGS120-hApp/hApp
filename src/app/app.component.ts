import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private authenticated : boolean = false;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer){
      iconRegistry.addSvgIcon('controls', 
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/controls.svg'));
  }
}
