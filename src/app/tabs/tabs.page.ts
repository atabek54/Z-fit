import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
user:any
  constructor(private modalCtrl:ModalController) {
this.user=localStorage.getItem('User');
  }
ngOnInit(): void {
  console.log('TabsPage')
  console.log(JSON.parse(this.user))
if(this.user==null)
this.openSettingsModal()
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
