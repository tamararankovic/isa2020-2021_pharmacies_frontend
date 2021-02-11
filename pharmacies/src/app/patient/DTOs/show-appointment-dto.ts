export class ShowAppointmentDto {
    constructor(
        public id: number,
        public date: string,
        public doctorId : number,
        public pharmacistName : string,
        public cancellable : boolean,
        public duration: number,
        public price : number,
        public type : string
    ){}
}
