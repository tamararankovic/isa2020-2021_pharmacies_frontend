export class DermatologistDTO {
    constructor(
        public id : number,
        public name : string,
        public surname : string,
        public avgRating : number,
        public pharmacies : string[]
    ) {}
}
