import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navbar',
    loadChildren: () =>
      import('./common/navbar/navbar.module').then((m) => m.NavbarModule),
  },
  {
    path: 'lottie',
    loadChildren: () =>
      import('./common/lottie/lottie.module').then((m) => m.LottieCModule),
  },
  {
    path: 'home',
    redirectTo: 'lottie',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
