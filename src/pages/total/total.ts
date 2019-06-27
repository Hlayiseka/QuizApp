import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { QuestionnairePage } from '../questionnaire/questionnaire';


@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
  Total: number;
  cat
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    this.Total = this.navParams.data;
  }
  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
  goToQuestinnairePage() {
    this.navCtrl.push(QuestionnairePage, this.navParams.data);
  }
}
