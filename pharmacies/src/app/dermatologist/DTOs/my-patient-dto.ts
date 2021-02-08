export class MyPatientDTO {
    constructor(
        public patientId : number,
        public name : string,
        public surname : string,
        public appointmentDate : string,
	    public time : string
    ) {}
}