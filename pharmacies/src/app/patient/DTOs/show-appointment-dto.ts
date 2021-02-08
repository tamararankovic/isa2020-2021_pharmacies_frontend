export class ShowAppointmentDto {
    constructor(
        public id: number,
        public date: string,
        public pharmacistName : string,
        public cancellable : boolean,
        public type : string
    ){}
}
