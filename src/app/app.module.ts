import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavouritePage } from '../pages/favourite/favourite';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { LibraryPage } from '../pages/library/library';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from "../pages/service/quotes.service";
import { SettingService } from '../pages/service/setting.service';
@NgModule({
  declarations: [
    MyApp,
    FavouritePage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    LibraryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritePage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler
    },
    QuotesService,SettingService
  ]
})
export class AppModule {}
