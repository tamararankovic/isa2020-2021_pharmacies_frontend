export class MedicineDTO {
    constructor(
        public code : string,
        public name : string,
        public type : string,
        public form : string,
        public ingredients : string[],
        public manufacturer : string,
        public withPrescription : boolean,
        public additionalInfo : string,
        public compatibleMedicineCodes : string[],
        public points : number,
        public sideEffects : string,
        public advisedDailyDose : number 
    ) {}
}
