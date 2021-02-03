export class MedicineDetailsDTO {
    constructor(
        public name : string,
        public code : string,
        public type : string,
        public form : string,
        public withPrescription : boolean,
        public ingredients : string[],
        public manufacturer : string,
        public additionalInfo : string,
        public points : number,
        public sideEffects : string,
        public advisedDailyDose : number
    ) {}
}