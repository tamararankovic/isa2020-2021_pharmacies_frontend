export class UserPasswordChangeDto {
    constructor(
        public email : string,
        public password : string,
        public newPassword : string
    ) {}
}
