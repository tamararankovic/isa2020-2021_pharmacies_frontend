import { ItemPriceDto } from "./item-price-dto";

export class PriceListDTO {
    constructor(
        public medicinePrices : ItemPriceDto[],
        public pharmacistAppointmentPrice : ItemPriceDto,
        public dermatologistAppointmentPrice : ItemPriceDto,
        public startDate : Date,
        public version : number
    ){}
}
