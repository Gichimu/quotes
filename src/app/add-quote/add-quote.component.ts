import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  quote:string;
  author:string;
  added_by:string;
  timestamp:Date = new Date();
  firebaseService:FirebaseService;

  //newQuote = new Quotes("", "", "", new Date);
  @Output() em = new EventEmitter<Quotes>();

  submitForm(){
    const myQuote = {
      quote: this.quote,
      author: this.author,
      added_by: this.added_by,
      datestamp: this.timestamp,
      upvotes: 0,
      downvotes: 0,
      showDetails: false
    }
    //this.firebaseService.createUser(myQuote);
    this.em.emit(myQuote);
  }

 

  constructor() { }

  ngOnInit() {
  }

}
