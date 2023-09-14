import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Subscription, switchMap } from 'rxjs';
import { ClientReadInterface } from '../../interfaces/client-read.interface';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ModalDeleteService } from 'src/app/shared/services/modal-delete.service';
import { EnumTypeMessage } from 'src/app/shared/constants/type-message.enum';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit, OnDestroy{

  private suscription:Subscription|null;
  public rows:ClientReadInterface[] = [];
  public loadRows:boolean = false;

  visibleRegisterModal = false;
  visibleEditModal = false;
  visibleDeleteModal = false;

  clientIdSelectedToDelete:number|null = null;


  constructor(private clientService:ClientService, private modalDeleteService:ModalDeleteService, private toastService:ToastService){    
    this.suscription = null;
  } 

  ngOnInit(): void {
    this.loadRows = true;
    this.suscription = this.clientService.clientList$
    .pipe(
      switchMap(() => this.clientService.getClients())
    )
    .subscribe({
      next: response => {
        this.loadRows = false;
        this.rows = response;
      },
      error: err => {
        this.loadRows = false;
        console.error(err);
      }
    })
    this.clientService.clientList$.next();
  }

  ngOnDestroy(): void {
      this.suscription?.unsubscribe();
  }

  toggleRegisterModal() { this.visibleRegisterModal = !this.visibleRegisterModal}
  
  toggleEditModal() { this.visibleEditModal = !this.visibleEditModal}

  toggleDeleteModal() { this.visibleDeleteModal = !this.visibleDeleteModal}

  selectEditClient(client:ClientReadInterface){
    console.log(client);
    this.clientService.selectedClient$.next(client);
    this.visibleEditModal = true;
  }

  selectDeleteClient(client:ClientReadInterface){
    this.clientIdSelectedToDelete = client.id;
    this.visibleDeleteModal = true;
  }

  deleteClient(){
    if (!this.clientIdSelectedToDelete) return;
    this.modalDeleteService.onLoading();
    this.clientService.deleteClient(this.clientIdSelectedToDelete).subscribe({
      next: response => {
        this.modalDeleteService.offLoading();
        this.toastService.showMessage(EnumTypeMessage.DELETE_SUCCESS);
        this.clientService.clientList$.next();
        this.visibleDeleteModal = false;
      },
      error: err => {
        this.modalDeleteService.offLoading();
        this.toastService.showMessage(EnumTypeMessage.OPERATION_ERROR);
      }
    })
  }

}
