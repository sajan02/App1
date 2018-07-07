import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuotesService } from '../service/quotes.service';
import { quote } from '../../assets/data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person:string;
  text:string;
  id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public quotesService:QuotesService) {
  }

  // By default setting remove as false
  OnViewClose(remove=false){
    this.viewCtrl.dismiss(remove);
  }

  unFavQuote()
  {
    ;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.person=this.navParams.get('person');
    this.text=this.navParams.get('text');
    this.id=this.navParams.get('id');
  }

}
