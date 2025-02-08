import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.scss'
})

export class EventHandlingComponent {
  message: string = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  
  onMouseOut() {
    this.message = '';
  }
}
