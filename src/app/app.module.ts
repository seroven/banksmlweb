import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';
import { PanelLayoutModule } from './layout/panel-layout/panel-layout.module';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
