import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';

import { LottieRoutingModule } from './lottie-routing.module';
import { LottieComponent } from './lottie.component';

export function playerFactory() {
  return import(
    /* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg'
  );
}

@NgModule({
  declarations: [LottieComponent],
  imports: [
    CommonModule,
    LottieRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot(),
  ],
})
export class LottieCModule {}
