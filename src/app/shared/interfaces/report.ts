import { ReportPropertyInterface } from "./report-property";

export interface ReportInterface{
   responsavel?: string,
   descricao?: string,
   property?: ReportPropertyInterface[]
}