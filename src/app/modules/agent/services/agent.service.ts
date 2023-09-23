import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgentReadInterface } from '../interfaces/agent.interface';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private baseUrl = environment.baseUrl;
  private groupName = 'agent';

  public agentList$ = new Subject<void>();
  public selectedAgent$ = new Subject<AgentReadInterface>();

  constructor(private httpClient:HttpClient) { }

  getClients():Observable<AgentReadInterface[]>{
    return this.httpClient.get<AgentReadInterface[]>(`${this.baseUrl}/${this.groupName}/all`);
  }

  saveClient(agent:AgentReadInterface):Observable<AgentReadInterface>{
    return this.httpClient.post<AgentReadInterface>(`${this.baseUrl}/${this.groupName}/create`, agent);
  }

  editClient(agent:AgentReadInterface):Observable<AgentReadInterface>{
    return this.httpClient.put<AgentReadInterface>(`${this.baseUrl}/${this.groupName}/update/${agent.id}`, agent);
  }

  deleteClient(id:number):Observable<AgentReadInterface>{
    return this.httpClient.delete<AgentReadInterface>(`${this.baseUrl}/${this.groupName}/delete/${id}`);
  }
}
