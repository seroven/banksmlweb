import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    ListPageComponent,
    EditPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
