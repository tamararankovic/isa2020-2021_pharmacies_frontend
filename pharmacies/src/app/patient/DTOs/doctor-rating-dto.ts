export class DoctorRatingDto {
    constructor(
        public id : number,
        public pharmacyId :number,
        public Fullame : string,
        public rating : number
    ){}
}
