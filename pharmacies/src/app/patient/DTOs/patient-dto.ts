export class PatientDto {
    constructor(
        public name : string,
        public surname : string,
        public email : string,
        public address : string,
        public city : string,
        public country : string,
        public phone : string,
        public points : number,
        public category : string
    ) {}
}
