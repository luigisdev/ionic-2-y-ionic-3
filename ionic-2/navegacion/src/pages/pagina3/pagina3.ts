import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log( navParams );
    
    this.mutante = this.navParams.get('mutante');
  }

  mutante:any = {};

  ir_atras(){
    this.navCtrl.pop();
  }

  ir_root(){
    this.navCtrl.popToRoot();
  }
}
