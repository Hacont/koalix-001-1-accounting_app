import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { NgGridModule } from "angular2-grid";
import {AccountManagement} from "./account_management/account-management.component";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {HttpModule} from "@angular/http";
import {CarService} from "./account_management/carservice";
import {DialogModule} from "primeng/components/dialog/dialog";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ // import Angular's modules
      BrowserModule,
      FormsModule,
      NgGridModule,
      DataTableModule,
      HttpModule,
      DialogModule
  ],
  declarations: [
      AppComponent,
      AccountManagement
  ],
  providers: [
      CarService
  ]
})
export class AppModule {

}

