import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() projeto: any;

  constructor(private router: Router) {}

  verDetalhes() {
    this.router.navigate(['/project', this.name_project], {
      state: { projeto: this.projeto }
    });
  }

}
