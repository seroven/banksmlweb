import { EnumSeverityMessage } from "../constants/severity-message.enum";
import { EnumTypeMessage } from "../constants/type-message.enum";

export interface MessageInterface{
  title: EnumTypeMessage;
  severity:EnumSeverityMessage;
  summary:string;
  detail:string;
}