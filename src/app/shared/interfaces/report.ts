import { ReportPropertyInterface } from "./report-property";

export interface ReportCradInterface{
   id?: any,
   estado?: TypeInterface,
   responsavel?: string,
   descricao?: string,
   labels?: TypeInterface[],
   property?: ReportPropertyInterface[]
}

interface TypeInterface{
   chave: string,
   valor: string
}