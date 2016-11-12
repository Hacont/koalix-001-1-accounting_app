/*
 * Angular 2 decorators and services
 */
import {Component, OnInit} from '@angular/core';
import { TabMenuModule, MenuItem } from 'primeng/primeng';
import { RouterModule } from '@angular/router';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Kontenplan', icon: 'fa-bar-chart', routerLink: ['/account-management']},
      {label: 'Buchungen', icon: 'fa-calendar', routerLink: ['/test1']}
    ];
  }
}

