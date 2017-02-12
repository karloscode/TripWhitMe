import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap';
import { MessagesComponent } from 'ng2-messages/ng2-messages';
import {GoogleplaceDirective} from './directives/googleplace.directive';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent { 
  public isCollapsed: boolean = true;
  
  constructor(private af: AngularFire, private router: Router) {
    // this.af.auth.subscribe(auth => console.log(auth));
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }
}


@Component({
  templateUrl: 'page.not.found.html'
})

export class PageNotFoundComponent {}