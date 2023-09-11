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

  constructor(private httpClient:HttpClient) { }

  // NGRX

  get():Observable<ClientReadInterface[]>{
    return this.httpClient.get<ClientReadInterface[]>(`${this.baseUrl}/${this.groupName}/all`);
  }


}
