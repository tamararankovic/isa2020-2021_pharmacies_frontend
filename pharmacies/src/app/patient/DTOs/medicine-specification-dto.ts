import { CompatibleMedicinesDTO } from "./compatible-medicines-dto";

export class MedicineSpecificationDTO {
    constructor(
        public sideEffects : string,
        public advisedDailyDose : number,
        public ingredients : string[],
        public compatibleMedicines : CompatibleMedicinesDTO[]
    ){}
}
