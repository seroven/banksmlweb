import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelLayoutComponent } from './panel-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvatarModule, DropdownModule, FooterModule, GridModule, HeaderModule, NavModule, SidebarModule, UtilitiesModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PanelLayoutHeaderComponent } from './panel-layout-header/panel-layout-header.component';
import { PanelLayoutFooterComponent } from './panel-layout-footer/panel-layout-footer.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IconModule, IconSetService } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    PanelLayoutComponent,
    PanelLayoutHeaderComponent,
    PanelLayoutFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    DropdownModule,
    FooterModule,
    GridModule,
    HeaderModule,
    NavModule,
    SidebarModule,
    UtilitiesModule,
    NgScrollbarModule,
    IconModule
  ],
  providers: [ IconSetService ],
  exports: []
})
export class PanelLayoutModule { }
