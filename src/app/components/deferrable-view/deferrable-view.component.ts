import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-deferrable-view',
  imports: [MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './deferrable-view.component.html',
  styleUrl: './deferrable-view.component.scss'
})

export class DeferrableViewComponent {

}
