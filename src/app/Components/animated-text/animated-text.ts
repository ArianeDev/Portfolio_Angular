import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  imports: [],
  templateUrl: './animated-text.html',
  styleUrl: './animated-text.sass',
})
export class AnimatedText implements OnInit{
  @Input() fullText: string = '';
  @Input() startAnimation: boolean = false;
  @Output() animationDone = new EventEmitter<void>();
  displayedText: string = '';
  private index = 0;
  private hasStarted = false;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startAnimation'] && this.startAnimation && !this.hasStarted) {
      this.hasStarted = true;
      this.animateText();
    }
  }

  animateText(): void {
    const interval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText[this.index];
        this.index++;
      } else {
        clearInterval(interval);
        this.animationDone.emit();
      }
    }, 40);
  }
}
