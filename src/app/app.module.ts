import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculaterComponent } from './calculater/calculater.component';
import { TODOComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,

    CalculaterComponent,

    TODOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
