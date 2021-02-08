export class ERecepyDTO {
    constructor(
        public medicineCodes : string[],
        public pharmacyId : number,
        public totalPrice : number,
        public averageRating : number,
        public nameOfPharmacy : string,
        public addressOfPharmacy : string
    ) {}
}
