import { MedicineSpecificationDTO } from "./medicine-specification-dto";
import { PhamracyForMedSearchDTO } from "./phamracy-for-med-search-dto";

export class MedicineSearchDTO {
    constructor(
        public id : number,
        public name : string,
        public type : string,
        public averageRating : number,
        public specification : MedicineSpecificationDTO,
        public pharmacies : PhamracyForMedSearchDTO[]
    ){}
}
