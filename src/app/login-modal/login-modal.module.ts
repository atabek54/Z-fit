import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginModalPageRoutingModule } from './login-modal-routing.module';

import { LoginModalPage } from './login-modal.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginModalPageRoutingModule,
  ],
  declarations: [LoginModalPage],
  exports:[LoginModalPage]
})
export class LoginModalPageModule {}
