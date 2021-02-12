export class PharmacyProfileExaminationDto {
    constructor(
        public id : number,
        public startDateTime : Date,
        public dermatologist : string,
        public duration : number,
        public price : number,
        public version : number
    ) {}
}
