export class UserRegisterDto {
    constructor(
        public email : string,
        public password : string,
        public name : string,
        public surname : string,
        public address : string,
        public city : string,
        public country : string,
        public phone : string
    ) {}
}
