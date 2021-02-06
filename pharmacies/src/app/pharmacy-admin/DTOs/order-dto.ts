import { OfferDTO } from "./offer-dto";
import { OrderedMedicineDTO } from "./ordered-medicine-dto";

export class OrderDTO {
    constructor(
        public id : number,
        public medicines : OrderedMedicineDTO[],
        public deadline : Date,
        public editable : boolean,
        public state : string,
        public canChooseWinner : boolean,
        public allOffers : OfferDTO[],
        public winningOffer : OfferDTO
    ) {}
}
