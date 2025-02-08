import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-output',
  imports: [MatButtonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})

export class OutputComponent {

  @Output() addAnimalEvent = new EventEmitter<string>();
  @Input() animals = new Array();

  addTurtle() {
    this.addAnimalEvent.emit('🐢');
  }

  addBird() {
    this.addAnimalEvent.emit('🐦');
  }

  addGirafa() {
    this.addAnimalEvent.emit('🦒');
  }
}
