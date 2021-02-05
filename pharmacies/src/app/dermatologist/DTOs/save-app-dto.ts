export class SaveAppDTO {
    constructor(
        public lastAppointmentId : number,
        public price : number,
        public startDateTime : Date
    ) {}
}