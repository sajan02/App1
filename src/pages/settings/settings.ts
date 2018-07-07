import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingService } from '../service/setting.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public settingService:SettingService) {
  }
  onToggle(toggle:Toggle){
    console.log(toggle);
    this.settingService.settingToggle(toggle.checked);
  }

  isChecked()
  {
    return this.settingService.isAltrSetting();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
