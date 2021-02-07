export class PredefinedExaminationDTO {
    constructor(
        public dermatologistId : number,
        public startDateTime : Date,
        public price : number,
        public durationInMinutes : number
    ){}
}
