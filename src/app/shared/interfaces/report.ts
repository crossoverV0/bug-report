import { ReportPropertyInterface } from "./report-property";

export interface ReportInterface{
   responsible: string,
   description: string,
   property: ReportPropertyInterface[]
}