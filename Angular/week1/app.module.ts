import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlackComponent } from './black/black.component';
import { Black2Component } from './black2/black2.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlackComponent,
    Black2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
