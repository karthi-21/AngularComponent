import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottieComponent } from './lottie.component';

const routes: Routes = [{ path: '', component: LottieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LottieRoutingModule { }
