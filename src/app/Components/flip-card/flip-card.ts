import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  imports: [],
  templateUrl: './flip-card.html',
  styleUrl: './flip-card.sass'
})
export class FlipCard {
  @Input() name_title_front = '';
  @Input() name_title_back = '';
  @Input() type = '';
}
