import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent {

  @Input() name = '';
  uri = createAvatar(adventurer, { seed: 'Dennis' }).toDataUri()

  generateAvatar() {
    this.uri = createAvatar(adventurer, { seed: this.name }).toDataUri()
  }

}
