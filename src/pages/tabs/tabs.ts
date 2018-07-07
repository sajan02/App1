import { Component } from '@angular/core';
import { FavouritePage } from "../favourite/favourite";
import { LibraryPage } from "../library/library";
@Component({
    selector:'page-tabs',
    template: `
    <ion-tabs selectedINdex="0">
    <ion-tab [root]="favouritePage" tabTitle="favourites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="library" tabIcon="book"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage{
    favouritePage=FavouritePage;
    libraryPage=LibraryPage;
}