export class DermAppDto {
    constructor(
        public id: number, 
	    public startDateTime: Date,
	    public dermatologist: string,
	    public duration: string,
	    public price : number,
		public version : number
    ){}
}
