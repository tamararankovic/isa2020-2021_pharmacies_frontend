import { logging } from "protractor";

export class OfferDTO {
    constructor(
        public id : number,
        public supplierName : string,
        public price : number,
        public shippingDeadline : Date
    ){}
}
