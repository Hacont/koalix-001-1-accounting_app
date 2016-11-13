import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgGridModule } from 'angular2-grid';
import { AccountManagementComponent } from './account_management/account-management.component';
import { AccountService } from './account_management/account-service';
import { TabMenuModule, DialogModule, DataTableModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { BalanceComponent } from './balance/balance.component';
import { AccountingEntryService } from './accounting/accounting-entry-service';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';

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
      ButtonModule,
      DialogModule,
      InputTextModule,
      AutoCompleteModule
  ],
  declarations: [
      AppComponent,
      AccountManagementComponent,
      AccountingComponent,
      BalanceComponent
  ],
  providers: [
      AccountService,
      AccountingEntryService
  ]
})
export class AppModule {

}

