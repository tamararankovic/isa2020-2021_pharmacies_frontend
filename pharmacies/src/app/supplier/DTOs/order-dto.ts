import { OrderedMedicineForSupplierDTO } from "./ordered-medicine-for-supplier-dto";


export class OrderDto {
    constructor(
        public id : number,
        public medicines : OrderedMedicineForSupplierDTO[],
        public deadline : Date,
        public state : string,
        public pharmacyName : string
    ){}
}
