import { Inject, Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { EnumTypeMessage } from "../constants/type-message.enum";
import { ToastsMessages } from "../constants/toast-messages";

@Injectable({
  providedIn: 'root',
})
export class ToastService{

  constructor(private messageService:MessageService){}

  public showMessage(typeMessage:EnumTypeMessage){
    const message = ToastsMessages.find(m => m.title == typeMessage);
    this.messageService.add({ severity: message?.severity, summary: message?.summary, detail: message?.detail });
  }


}