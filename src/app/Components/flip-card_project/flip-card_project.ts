import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card-project',
  imports: [],
  templateUrl: './flip-card_project.html',
  styleUrl: './flip-card_project.sass'
})
export class FlipCardProject {
  @Input() img = '';
  @Input() name_project = '';
  @Input() description = '';
}
