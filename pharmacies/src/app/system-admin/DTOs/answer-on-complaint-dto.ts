export class AnswerOnComplaintDTO {
    constructor(
        public answer : string,
        public type : string,
        public complaintId : number
    ) {}
}
