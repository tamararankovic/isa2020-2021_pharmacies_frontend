export class PharmacistDTO {
    constructor(
        public id : number,
        public name : string,
        public surname : string,
        public avgRating : number,
        public pharmacy : string
    ) {}
}
