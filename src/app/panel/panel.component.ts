import { Component, EventEmitter, Output } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './frases-mock';
import { GameResult } from '../shared/gameResult.model';

@Component({
  selector: 'app-painel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  public phrases: Phrase[] = PHRASES;
  public instruction: string = 'Traduza a frase:';
  public answer: string = '';

  public round: number = 0;
  public phraseRound: Phrase = {} as Phrase;

  public progress: number = 0;

  public attempts: number = 3;

  @Output() public gameOver: EventEmitter<GameResult> = new EventEmitter();

  constructor() {
    this.phraseRound = this.phrases[this.round];
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if (this.answer === this.phraseRound.phrasePt) {
      if (this.round < this.phrases.length - 1) {
        this.updateRound();
      } else {
        this.gameOver.emit('won');
      }
    } else {
      this.attempts--;
      if (this.attempts === -1) {
        this.gameOver.emit('lost');
      }
    }
  }

  public updateRound(): void {
    this.round++;
    this.phraseRound = this.phrases[this.round];
    this.progress = this.progress + (100 / this.phrases.length);
    this.answer = '';
  }
}
