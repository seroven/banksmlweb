import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Subscription, switchMap } from 'rxjs';
import { ClientReadInterface } from '../../interfaces/client-read.interface';

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

  constructor(private clientService:ClientService){    
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

}
