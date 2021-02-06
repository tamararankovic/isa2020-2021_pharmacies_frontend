export class AllOffersDTO {
    constructor(
        public idOffer : number,
        public deadline : Date,
        public accepted : string,
        public totalPrice : number,
        public pharmacyName : string
    ){}
}
