import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForComponent } from './components/for/for.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventHandlingComponent } from './components/event-handling/event-handling.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './components/output/output.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { InfinityScrollComponent } from './components/infinity-scroll/infinity-scroll.component';
import { DeferrableViewComponent } from "./components/deferrable-view/deferrable-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatTabsModule,
    IfElseComponent,
    ForComponent,
    PropertyBindingComponent,
    EventHandlingComponent,
    InputComponent,
    OutputComponent,
    HomeComponent,
    InfinityScrollComponent,
    DeferrableViewComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  title = 'BirdsAngular';

  animals = new Array();

  addAnimal(animal:string){
    this.animals.push(animal);
    this.openSnackBar(animal + ' added','Close')
  }

}
