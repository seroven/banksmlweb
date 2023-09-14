import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    DropdownModule,
    DialogModule
  ]
})
export class PrimengSharedModule { }
