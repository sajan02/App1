import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { quote  } from '../../assets/data/quote.interface';
import { QuotesService } from '../service/quotes.service';
import { QuotePage } from '../quote/quote';
import { SettingService } from '../service/setting.service';

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
  private favQuote: quote[]=[];
  constructor(public navCtrl: NavController,
  public navParams: NavParams,private quotesService:QuotesService,
  private modalCtrl:ModalController,public menu:MenuController,
  private settingService:SettingService ) {
  }

  // to openmenu 
  // openmenu()
  // {
  //   this.menu.open();
  // }

  // [color]="altBackground()" we can change color using this approach or by using ngClass directive
  altBackground()
  {
    return this.settingService.isAltrSetting()?'mybackgroundcolor':'altcolor';
  }

  modalView(quote:quote){
    const modal=this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      console.log(remove);
      if(remove)
      {
        this.removeItem(quote);
      }
        
    });
    
  }

  removeItem(quote:quote){
    this.quotesService.removeQuoteFromFav(quote);
    // const pos=this.favQuote.findIndex((quoteEl:quote)=>{
    //   return quoteEl.id==quote.id;
    // })
    this.favQuote=this.quotesService.getFavQuotes();
  }
  
  ionViewWillEnter() {
    console.log('ionViewDidLoad FavouritePage');
    this.favQuote=this.quotesService.getFavQuotes();
  }

}
