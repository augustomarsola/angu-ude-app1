import { Component, Input, OnChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './attempts.component.html',
})
export class AttemptsComponent implements OnChanges {
  public emptyHeart = '../assets/empty-heart.svg';
  public fullHeart = '../assets/full-heart.svg';

  @Input() attempts: number = 3;

  // public hearts: Heart[] = [
  //   new Heart(true),
  //   new Heart(true),
  //   new Heart(true),
  // ];

  public hearts: Heart[] = Array.from({ length: this.attempts }, () => new Heart(true));

  public ngOnChanges(): void {
    if (this.attempts !== this.hearts.length) {
      const index = this.attempts;
      this.hearts[index].isFull = false;
    }
  }
}
