import { ReportPropertyInterface } from "./report-property";

export interface ReportInterface{
   responsavel?: string,
   descricao?: string,
   labels?: LabelInterface[],
   property?: ReportPropertyInterface[]
}

interface LabelInterface{
   tipo: string,
   valor: string
}