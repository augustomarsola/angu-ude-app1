import { Component } from '@angular/core';
import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './frases-mock';

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

  constructor() {
    this.phraseRound = this.phrases[this.round];
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if (this.answer === this.phraseRound.phrasePt) {
      alert('Acertou!');
      this.updateRound();
    } else {
      alert('Errou!');
    }
  }

  public updateRound(): void {
    this.round++;
    this.phraseRound = this.phrases[this.round];
    this.progress = this.progress + (100 / this.phrases.length);
    this.answer = '';
  }
}
