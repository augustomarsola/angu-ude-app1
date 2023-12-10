import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  @Input() public progress: number = 0;
}
