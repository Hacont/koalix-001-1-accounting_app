import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { NgGridModule } from "angular2-grid";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    NgGridModule
  ],
  declarations: [
      AppComponent
  ]
})
export class AppModule {

}

