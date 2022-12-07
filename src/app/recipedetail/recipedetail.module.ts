import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipedetailPageRoutingModule } from './recipedetail-routing.module';

import { RecipedetailPage } from './recipedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipedetailPageRoutingModule
  ],
  declarations: [RecipedetailPage]
})
export class RecipedetailPageModule {}
