export class LoyaltyDTO {
    constructor(
        public pointsAfterAppointment : number,
        public pointsAfterAdvising : number,
        public pointsForRegular : number,
        public discountForRegular : number,
        public pointsForSilver : number,
        public discountForSilver : number,
        public pointsForGold : number,
        public discountForGold : number
    ) {}
}

