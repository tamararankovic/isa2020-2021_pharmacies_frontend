import { MedicineToOrderDTO } from "./medicine-to-order-dto";

export class OrderedMedicineDTO {
    constructor(
        public medicine : MedicineToOrderDTO,
        public quantity : number
    ){}
}
