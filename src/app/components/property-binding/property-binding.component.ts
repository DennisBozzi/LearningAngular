import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-property-binding',
  imports: [MatButtonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})

export class PropertyBindingComponent {
  imageUrl: string = "https://avatars.githubusercontent.com/u/98779786?v=4";

  isEditable: boolean = true;

  changeEditable() {
    this.isEditable = !this.isEditable;
  }

}
