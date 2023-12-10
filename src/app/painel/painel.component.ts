import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
})
export class PainelComponent {
  public prases: Frase[] = FRASES;
  public instruction: string = 'Traduza a frase:';
  public answer: string = '';

  public round: number = 0;
  public praseRound: Frase = {} as Frase;

  public progress: number = 0;

  constructor() {
    this.praseRound = this.prases[this.round];
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public checkAnswer(): void {
    if (this.answer === this.praseRound.frasePt) {
      alert('Acertou!');
      this.updateRound();
    } else {
      alert('Errou!');
    }
  }

  public updateRound(): void {
    this.round++;
    this.praseRound = this.prases[this.round];
    this.progress = this.progress + (100 / this.prases.length);
    this.answer = '';
  }
}
