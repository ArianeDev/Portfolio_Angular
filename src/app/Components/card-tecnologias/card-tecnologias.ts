import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tecnologias',
  imports: [],
  templateUrl: './card-tecnologias.html',
  styleUrl: './card-tecnologias.sass'
})
export class CardTecnologias {
  @Input() text = '';
  @Input() icon = '';
}
