import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  NgZone,
  Component,
  OnInit,
} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LottieComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/welcome.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
  };

  private animationItem!: AnimationItem;

  constructor(private ref: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  updateAnimation(name: string): void {
    this.options = {
      ...this.options,
      path: `/assets/lottie/` + name + `.json`,
    };
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.stop();
    });
  }

  pause(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.pause();
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }
}
