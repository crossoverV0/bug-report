import { ReportPropertyInterface } from "./report-property";

export interface ReportInterface{
   id?: any,
   estado?: TypeInterface,
   responsavel?: string,
   descricao?: string,
   labels?: TypeInterface[],
   propertys?: ReportPropertyInterface[]
}

export interface ReportCardInterface{
   estado?: TypeInterface,
   responsavel?: string,
   descricao?: string,
   labels?: TypeInterface[],
}

export interface TypeInterface{
   id: number,
   chave: string,
   valor: string
}