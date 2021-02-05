export class MedicineInPharmacyDTO {
    constructor(
        public id : number,
        public code : string,
        public name : string,
        public type : string,
        public manufacturer : string,
        public quantity : number
    ) {}
}
