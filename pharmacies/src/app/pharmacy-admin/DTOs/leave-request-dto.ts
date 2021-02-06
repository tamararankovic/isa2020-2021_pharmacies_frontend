export class LeaveRequestDTO {
    constructor(
        public id : number,
        public employeeName : string,
        public startDate : Date,
        public endDate : Date,
        public leaveType : string
    ){}
}
