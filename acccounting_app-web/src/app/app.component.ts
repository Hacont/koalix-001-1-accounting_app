/*
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

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
      {label: 'Buchungen', icon: 'fa-exchange', routerLink: ['/accounting']},
      {label: 'Bilanz', icon: 'fa-balance-scale', routerLink: ['/balance']},
      {label: 'Kontenplan', icon: 'fa-credit-card', routerLink: ['/account-management']}
    ];
  }
}

