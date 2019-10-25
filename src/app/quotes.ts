export class Quotes {
    showDetails:boolean;
    constructor(public author:string, public quote:string, public details:string, public added_by:string){
        this.showDetails = false;
    }
}
