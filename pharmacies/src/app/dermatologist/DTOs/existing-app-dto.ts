export class ExistingAppDTO {
    constructor(
        public id : number,
        public startDateTime : string,
        public durationInMinutes : number,
        public price : number
    ) {}
}