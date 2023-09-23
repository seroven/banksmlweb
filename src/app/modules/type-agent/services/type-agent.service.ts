import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeAgentReadInterface } from '../interfaces/type-agent.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeAgentService {

  private baseUrl = environment.baseUrl;
  private groupName = 'typeAgent';
  
  constructor(private httpClient:HttpClient) { }

  getTypesAgent():Observable<TypeAgentReadInterface[]>{
    return this.httpClient.get<TypeAgentReadInterface[]>(`${this.baseUrl}/${this.groupName}/all`);
  }


}
