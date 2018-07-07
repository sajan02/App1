import { Component, OnInit } from '@angular/core';
import { quote } from "../../assets/data/quote.interface";
import quotes from "../../assets/data/quotes";
import { QuotesPage } from "../quotes/quotes";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
}) 
export class LibraryPage implements OnInit {
quotesPage=QuotesPage;
quoteCollection: {category: string, quotes:quote[],icon:string}[];
ngOnInit(){
this.quoteCollection=quotes;
}
}
