export class ChangePasswordDTO {
    constructor(
        public email : string,
        public password : string,
        public newPassword : string
    ){}

}
