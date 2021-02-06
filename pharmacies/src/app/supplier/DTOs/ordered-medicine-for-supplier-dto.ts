import { MedicineForSupplierDTO } from "./medicine-for-supplier-dto";

export class OrderedMedicineForSupplierDTO {
constructor(
    public medicine : MedicineForSupplierDTO,
    public quantity : number
){}
}
