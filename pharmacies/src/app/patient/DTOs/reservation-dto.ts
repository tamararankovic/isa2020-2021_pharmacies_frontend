export class ReservationDto {
    constructor(
        public id : number,
        public medicine: string,
        public pharmacy : string,
        public date :string,
        public received : string,
        public cancellable :boolean
    ){}
}

