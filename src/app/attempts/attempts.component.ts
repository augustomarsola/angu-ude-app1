import { Component } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './attempts.component.html',
})
export class AttemptsComponent {
  public emptyHeart = '../assets/empty-heart.svg';
  public fullHeart = '../assets/full-heart.svg';

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]
}
