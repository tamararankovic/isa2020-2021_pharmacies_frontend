export class SaveAppDTO {
    constructor(
        public lastAppointmentId : number,
        public startDateTime : Date
    ) {}
}