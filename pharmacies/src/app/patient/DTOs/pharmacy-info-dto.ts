import { PharmacyProfileExaminationDto } from "./pharmacy-profile-examination-dto";

export class PharmacyInfoDto {
    constructor(
        public id :number,
        public name : string,
        public description : string,
        public address : string,
        public avgRating : number,
        public pharmacists : string[],
        public dermatologists : string[],
        public medicines : string[],
        public examinations : PharmacyProfileExaminationDto[]
    ){}
}
