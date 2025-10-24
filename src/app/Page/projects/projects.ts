import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.sass',
})
export class Projects {
  projeto: any | null = null; //tipar quando der

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projeto = history.state.projeto;
  }
}
