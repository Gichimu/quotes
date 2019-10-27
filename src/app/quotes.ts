export class Quotes {
    showDetails:boolean;
    upvotes:number;
    downvotes:number;

    constructor(public author:string, public quote:string, public details:string, public added_by:string){
        this.showDetails = false;
        this.upvotes = 0;
        this.downvotes = 0;
    }
}
