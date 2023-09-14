import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { PrimengSharedModule } from './modules/primeng-shared.module';



@NgModule({
  declarations: [
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    PrimengSharedModule
  ],
  exports: [
    PrimengSharedModule,
    ModalDeleteComponent
  ]
})
export class SharedModule { }
