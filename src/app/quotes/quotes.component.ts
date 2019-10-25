import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  user:string = 'Eric Gichimu';
  quotes: Quotes[] = [
    new Quotes('Mahatma Ghandhi', 'You only live once', 'written by MG while he was high af', this.user),
    new Quotes('Mahatma Gichimu', 'Niggas aint sh*t', 'Eric, esquire did this', this.user)
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
