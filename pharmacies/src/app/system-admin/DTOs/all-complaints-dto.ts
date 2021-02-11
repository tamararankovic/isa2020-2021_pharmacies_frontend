export class AllComplaintsDTO {
    constructor(
        public complaintId : number,
        public text : string,
        public complainedFullName : string,
        public patientFullName : string,
        public type : string
    ) {}
}
