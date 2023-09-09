import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelLayoutComponent } from './panel-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PanelLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class PanelLayoutModule { }
