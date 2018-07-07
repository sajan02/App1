import { quote} from "../../assets/data/quote.interface";

export class QuotesService{
    private favQuotes:quote[]=[];
    addQuoteToFav(quote: quote)
    {
        this.favQuotes.push(quote);
        console.log(this.favQuotes);
    }

    removeQuoteFromFav(quote:quote){
        const pos=this.favQuotes.findIndex((quoteEl:quote)=>{
                return quoteEl.id==quote.id;
        });
        this.favQuotes.splice(pos,1);
    }
    getFavQuotes()
    {
       return this.favQuotes.slice();
    }
    isQuoteFav(quote:quote)
    {
        return this.favQuotes.find((quoteEl:quote)=>{
            return quoteEl.id==quote.id;
        });
    }
}