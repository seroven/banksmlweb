import { MessageInterface } from "../interfaces/message.interface";
import { EnumSeverityMessage } from "./severity-message.enum";
import { EnumTypeMessage } from "./type-message.enum";

export const ToastsMessages:MessageInterface[] = [
  {
    title: EnumTypeMessage.LOGIN_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario y/o contraseña incorrectos'
  },
  {
    title: EnumTypeMessage.LOGIN_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Sesión Iniciada',
    detail: 'Credenciales correctas'
  },
  {
    title: EnumTypeMessage.CREATE_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro guardado'
  },
  {
    title: EnumTypeMessage.EDIT_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro actualizado'
  },
  {
    title: EnumTypeMessage.DELETE_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Operación Exitosa',
    detail: 'Registro eliminado'
  },
  {
    title: EnumTypeMessage.OPERATION_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Ha ocurrido un problema'
  }
]

