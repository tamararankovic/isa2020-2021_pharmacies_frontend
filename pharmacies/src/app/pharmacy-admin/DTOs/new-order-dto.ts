import { NewMedicineQuantityDTO } from "./new-medicine-quantity-dto";

export class NewOrderDTO {
    constructor(
        public medicines : NewMedicineQuantityDTO[],
        public deadline : Date
    ) {}
}
