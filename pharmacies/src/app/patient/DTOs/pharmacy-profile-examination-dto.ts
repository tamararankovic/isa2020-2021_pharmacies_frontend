export class PharmacyProfileExaminationDto {
    constructor(
        public startDateTime : Date,
        public dermatologist : string,
        public duration : number,
        public price : number
    ) {}
}
