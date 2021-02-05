export class DealPromotionDTO {
    constructor(
        public text : string,
        public deal : boolean,
        public startDate : Date,
        public endDate : Date
     ){}
}
