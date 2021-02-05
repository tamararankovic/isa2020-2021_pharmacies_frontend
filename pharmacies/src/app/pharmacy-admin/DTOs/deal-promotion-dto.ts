export class DealPromotionDTO {
    constructor(
        public text : string,
        public type : number,
        public startDateTime : Date,
        public endDateTime : Date
     ){}
}
