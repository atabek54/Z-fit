import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisedetailPageRoutingModule } from './exercisedetail-routing.module';

import { ExercisedetailPage } from './exercisedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercisedetailPageRoutingModule
  ],
  declarations: [ExercisedetailPage]
})
export class ExercisedetailPageModule {}
