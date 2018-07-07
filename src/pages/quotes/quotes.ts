import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { quote } from "../../assets/data/quote.interface";
import { QuotesService } from '../service/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
QuotesGroup:{category: string, quotes:quote[],icon:string};

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private quoteService:QuotesService) {
  }
  ngOnInit(){
    this.QuotesGroup=this.navParams.data;
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  // }
  addContentOnFav(qt:quote){
    const alert=this.alertCtrl.create(
      {
        title:'Add Quote',
        subTitle: 'Are you sure?',
        message:'Are you sure you want to add the quote? ',
        buttons:
        [
          {
            text:'Yes, go ahead',
            handler:()=>{
              this.quoteService.addQuoteToFav(qt);
            }
          },
          {
            text:'No, I changed my mind!',
            role:'cancel',
            handler:()=>{
              console.log('cancelled!');
          }
        }
        ]
      }
    );

    alert.present();
  };
  
  isQuoteMark(quote:quote)
  {
    return this.quoteService.isQuoteFav(quote);
   }

  unFavContent(quote:quote){
    this.quoteService.removeQuoteFromFav(quote);
  }
  
}
