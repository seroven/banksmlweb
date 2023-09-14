import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ClientRoutingModule } from './client-routing.module';
import { PrimengSharedModule } from 'src/app/shared/modules/primeng-shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListPageComponent,
    EditPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    SharedModule
  ],
})
export class ClientModule { }
