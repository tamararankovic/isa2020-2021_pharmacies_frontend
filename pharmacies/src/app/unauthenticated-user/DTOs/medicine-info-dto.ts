export class MedicineInfoDto {
    constructor(
        public id : number,
        public name: string,
        public info: string,
        public dose: number,
        public form: string,
        public manufacturer: string,
        public type:string,
        public points:number
    ){}
}
