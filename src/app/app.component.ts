import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForComponent } from './components/for/for.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventHandlingComponent } from './components/event-handling/event-handling.component';
import { ComponentComunicationComponent } from './components/component-comunication/component-comunication.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatTabsModule,
    IfElseComponent,
    ForComponent,
    PropertyBindingComponent,
    EventHandlingComponent,
    ComponentComunicationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BirdsAngular';
}
