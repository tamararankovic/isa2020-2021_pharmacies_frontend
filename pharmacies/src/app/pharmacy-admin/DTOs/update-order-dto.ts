import { NewOrderDTO } from "./new-order-dto";

export class UpdateOrderDTO {
    constructor(
        public id : number,
        public order : NewOrderDTO
    ){}
}
