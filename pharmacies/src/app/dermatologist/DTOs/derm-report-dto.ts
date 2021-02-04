import { TherapyDTO } from "./therapy-dto";

export class DermReportDTO {
    constructor(
        public appointmentId : number,
        public diagnosis : string,
        public therapies : TherapyDTO[]
    ) {}
}