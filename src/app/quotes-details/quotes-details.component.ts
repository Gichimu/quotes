import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() details:Quotes;
  @Output() isDone = new EventEmitter<boolean>();

  upVoteCounter(){
    this.details.upvotes+=1;
  }

  downVoteCounter(){
    this.details.downvotes+=1;
  }

  delete(){
    this.isDone.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
