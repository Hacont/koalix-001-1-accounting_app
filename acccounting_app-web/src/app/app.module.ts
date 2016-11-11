import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgGridModule } from 'angular2-grid';
import { AccountManagement } from './account_management/account-management.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { AccountService } from './account_management/accountService';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgGridModule,
      DataTableModule,
      DialogModule
  ],
  declarations: [
      AppComponent,
      AccountManagement
  ],
  providers: [
      AccountService
  ]
})
export class AppModule {

}

