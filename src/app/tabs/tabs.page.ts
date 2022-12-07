import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
user:User={
  name: '',
  height: '',
  weight: '',
  age: '',
  gender: '',
  stateOfMovement: '',
  bodyMass: '',
  amountOfCaloriesNeed: '',
  amountofWaterNeed: ''
};
  constructor(private modalCtrl:ModalController) {}
ngOnInit(): void {
  console.log('TabsPage')
const user =localStorage.getItem('User')
if(user==null){
  this.openSettingsModal()

}
}

  async openSettingsModal() {
  const modal = await this.modalCtrl.create({
    component: LoginModalPage,
    // Modal'a aktarilacak veriler componentProps'a yazilir
    // componentProps: {
    //   user: this.user
    // }
  });
  return await modal.present();
}
}
