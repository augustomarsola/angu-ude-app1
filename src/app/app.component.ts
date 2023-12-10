import { Component } from '@angular/core';
import { GameResult } from './shared/gameResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public gameInProgress: boolean = true;
  public gameResult: GameResult | '' = '';

  public gameOver(event: GameResult): void {
    this.gameInProgress = false;
    this.gameResult = event;
  }

  public resetGame(): void {
    this.gameInProgress = true;
    this.gameResult = '';
  }
}
