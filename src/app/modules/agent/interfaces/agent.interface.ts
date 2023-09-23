import { TypeAgentReadInterface } from "../../type-agent/interfaces/type-agent.interface";

export interface  AgentReadInterface 	{
  id: number;
  dni: string;
  names: string;
  lastnames: string;
  address: string;
  email_address: string;
  password: string;
  state: boolean;
  typeAgent: TypeAgentReadInterface;
}