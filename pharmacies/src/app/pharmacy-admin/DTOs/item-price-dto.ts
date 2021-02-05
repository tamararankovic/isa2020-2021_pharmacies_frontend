export class ItemPriceDto {
    constructor(
        public itemId : number,
        public itemName : string,
        public price : number,
        public undefined : boolean
    ) {}
}
