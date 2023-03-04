import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// custom Imports
import { MaterialModule } from './Material/material.module'
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      MaterialModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
