export class PharmAppDTO {
    constructor(
        public appointmentId : number,
        public startTime : string,
        public durationInMinutes : number,
        public patientName : string
    ) {}
}
	