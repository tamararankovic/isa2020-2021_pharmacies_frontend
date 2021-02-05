export class PasswordSupplierDTO {
    constructor(
        public oldPassword : string,
        public newPassword : string,
        public newPasswordRepeat : string,
    ) {}
}
