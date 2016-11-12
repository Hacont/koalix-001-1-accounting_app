import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgGridModule } from 'angular2-grid';
import { AccountManagementComponent } from './account_management/account-management.component';
import { AccountService } from './account_management/accountService';
import { TabMenuModule, DialogModule, DataTableModule} from 'primeng/primeng';
import {RouterModule} from "@angular/router";
import {AccountingComponent} from "./accounting/accounting.component";
import {BalanceComponent} from "./balance/balance.component";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
      NgGridModule,
      DataTableModule,
      DialogModule,
      TabMenuModule,
      RouterModule,
  ],
  declarations: [
      AppComponent,
      AccountManagementComponent,
      AccountingComponent,
      BalanceComponent
  ],
  providers: [
      AccountService
  ]
})
export class AppModule {

}

