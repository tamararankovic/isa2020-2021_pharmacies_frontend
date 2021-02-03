export class NewDermatologistDTO {
    constructor(
        public dermatologistId : number,
        public monday : boolean,
        public tuesday : boolean,
        public wednesday : boolean,
        public thursday : boolean,
        public friday : boolean,
        public saturday : boolean,
        public sunday : boolean,
        public mondayStart : Date,
        public mondayEnd : Date,
        public tuesdayStart : Date,
        public tuesdayEnd : Date,
        public wednesdayStart : Date,
        public wednesdayEnd : Date,
        public thursdayStart : Date,
        public thursdayEnd : Date,
        public fridayStart : Date,
        public fridayEnd : Date,
        public saturdayStart : Date,
        public saturdayEnd : Date,
        public sundayStart : Date,
        public sundayEnd : Date
    ){}
}
