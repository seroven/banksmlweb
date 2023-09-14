import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ClientReadInterface } from '../interfaces/client-read.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = environment.baseUrl;
  private groupName = 'client';
  public clientList$ = new Subject<void>();
  public selectedClient$ = new Subject<ClientReadInterface>();

  constructor(private httpClient:HttpClient) { }

  // NGRX

  getClients():Observable<ClientReadInterface[]>{
    return this.httpClient.get<ClientReadInterface[]>(`${this.baseUrl}/${this.groupName}/all`);
  }

  saveClient(client:ClientReadInterface):Observable<ClientReadInterface>{
    return this.httpClient.post<ClientReadInterface>(`${this.baseUrl}/${this.groupName}/create`, client);
  }

  editClient(client:ClientReadInterface):Observable<ClientReadInterface>{
    return this.httpClient.put<ClientReadInterface>(`${this.baseUrl}/${this.groupName}/update/${client.id}`, client);
  }

  deleteClient(id:number):Observable<ClientReadInterface>{
    return this.httpClient.delete<ClientReadInterface>(`${this.baseUrl}/${this.groupName}/delete/${id}`);
  }

  


}
