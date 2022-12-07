import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisedetailPage } from './exercisedetail.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisedetailPageRoutingModule {}
