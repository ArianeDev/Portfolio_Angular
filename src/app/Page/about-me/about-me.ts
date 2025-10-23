import { Component } from '@angular/core';
import { FlipCard } from '../../Components/flip-card/flip-card';
import { diFastapiOriginal } from '@ng-icons/devicon/original';
import { CardTecnologias } from '../../Components/card-tecnologias/card-tecnologias';

@Component({
  selector: 'app-about-me',
  imports: [FlipCard, CardTecnologias],
  templateUrl: './about-me.html',
  styleUrl: './about-me.sass'
})
export class AboutMe {

}
