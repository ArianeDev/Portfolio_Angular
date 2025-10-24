import { Component, signal } from '@angular/core';
import { FlipCard } from '../../Components/flip-card/flip-card';
import { CardTecnologias } from '../../Components/card-tecnologias/card-tecnologias';
import { FlipCardProject } from '../../Components/flip-card_project/flip-card_project';

@Component({
  selector: 'app-about-me',
  imports: [FlipCard, FlipCardProject, CardTecnologias],
  templateUrl: './about-me.html',
  styleUrl: './about-me.sass'
})
export class AboutMe {
  listTecnologias = signal([
    {
      icon: "bx bxl-python",
      text: "Python"
    },
    {
      icon: "si si-csharp",
      text: "C#"
    },
    {
      icon: "bx bxl-java",
      text: "Java"
    },
    {
      icon: "bx bxl-django",
      text: "Django"
    },
    {
      icon: "si si-springboot",
      text: "SpringBoot"
    },
    {
      icon: "si si-mysql",
      text: "MySql"
    },
    {
      icon: "bx bxl-react",
      text: "React"
    },
    {
      icon: "bx bxl-angular",
      text: "Angular"
    },
    {
      icon: "bx bxl-sass",
      text: "Sass"
    },
    {
      icon: "bx bxl-javascript",
      text: "JavaScript"
    },
    {
      icon: "bx bxl-typescript",
      text: "TypeScript"
    },
    {
      icon: "si si-github",
      text: "Github"
    },
  ]);

  listCard = signal([
    {
      name_title_front: "Família",
      name_title_back: "Minha base",
      type: "game",
    },
    {
      name_title_front: "Filme favorito",
      name_title_back: "Meu companheiro",
      type: "movie",
    },
    {
      name_title_front: "Amigos",
      name_title_back: 'Minha alegria',
      type: "serie",
    },
    {
      name_title_front: "Animalzinho",
      name_title_back: 'Minha alegria',
      type: "serie",
    },
    {
      name_title_front: "Jogo Favorito",
      name_title_back: "Hollow knight",
      type: "game",
    },
    {
      name_title_front: "Filme favorito",
      name_title_back: "Lilo e Stitch",
      type: "movie",
    },
    {
      name_title_front:"Série favorita",
      name_title_back:'Anne with an E',
      type: "serie",
    },
    {
      name_title_front: "Música favorita",
      name_title_back: 'Anne with an E',
      type: "serie",
    }
  ]);

  listProjects = signal([
    {
      img: "img/logos/eLOGiar.png",
      name_project: "eLOGiar",
      description: "Um sistema de reconhecimento de boas atitudes"
    },
    {
      img: "img/logos/smartTrack.png",
      name_project: "SmartTrack",
      description: "Um sistema para uma cidade inteligente, onde gerencia todos os sensores da instituição Senai"
    },
    {
      img: "img/logos/starzing.png",
      name_project: "Starzing",
      description: "Um site educativo sobre como o clima espacial, desenvolvido para o hackathon da NASA"
    },
    {
      img: "img/logos/driveInOut.png",
      name_project: "DriveInOut",
      description: "Um sistema de gerenciamento de entrada e saída das pessoas que vão testar seus carros na pista de teste - CTVI."
    },
  ])
}
