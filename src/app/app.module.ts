import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';
import { PanelLayoutModule } from './layout/panel-layout/panel-layout.module';
import { ToastModule } from 'primeng/toast';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelLayoutModule,
    IconModule,
    ToastModule,
    HttpClientModule
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
