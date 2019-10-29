import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { sortedChanges } from '@angular/fire/firestore';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  user:string = 'Eric Gichimu';
  mydate:Date = new Date();
  upvotearr:any = [];
  isTopQuote:boolean = false;
  // let rightNow:Date = new Date();
  // let todayWithouttime:any = new Date(rightNow.getFullYear(), rightNow.getMonth(), rightNow.getUTCDate());
  // let mydatevar = Math.abs(value - todayWithouttime);

  

  quotes: Quotes[] = [
    new Quotes('Mahatma Ghandhi', 'You only live once', this.user, new Date()),
    new Quotes('Mahatma Gichimu', 'Niggas aint sh*t', this.user, new Date(2019,6,4)),
    new Quotes('Arya Stark', 'Valar Moghulis', 'Wendy Orengo', new Date(2018, 13, 2))
  ];

  topQuote(){
    
    this.quotes.forEach(function(quote){
    this.upvotearr.push(quote.upvotes);
   
    });
    this.upvotearr.sort(function(a, b){
      return b - a;
    });
    
    return this.upvotearr;
  }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(index){
    
      this.quotes.splice(index, 1);
    
  }

  addQuote(quote:Quotes){
    // let date1:Date = new Date(quote.datestamp)
    // let timePassed = this.mydate - date1;
     // let timePassed = right
     this.quotes.push(quote);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
