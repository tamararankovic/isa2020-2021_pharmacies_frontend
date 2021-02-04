export class PharmacyAdminRegisterDTO {
    constructor(
        public email : string,
        public password : string,
        public name : string,
        public surname : string,
        public idOfPharmacy : number
    ) {}
}
