import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
  {
    path: 'exercisedetail/:id',
    loadChildren: () => import('./exercisedetail/exercisedetail.module').then( m => m.ExercisedetailPageModule)
  },
  {
    path: 'recipedetail/:id',
    loadChildren: () => import('./recipedetail/recipedetail.module').then( m => m.RecipedetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
