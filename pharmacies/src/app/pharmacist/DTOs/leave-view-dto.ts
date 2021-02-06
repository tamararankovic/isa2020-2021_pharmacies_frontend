export class LeaveViewDTO {
    constructor(
        public startDate : string,
        public endDate: string,
        public type: string,
        public confirmed: string
    ) {}
}