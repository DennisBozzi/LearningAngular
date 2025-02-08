import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css'],
  imports: [MatButtonModule]
})

export class IfElseComponent {

  isServerRunning: boolean = false;

  changeServer() {
    this.isServerRunning = !this.isServerRunning;
  }
}
