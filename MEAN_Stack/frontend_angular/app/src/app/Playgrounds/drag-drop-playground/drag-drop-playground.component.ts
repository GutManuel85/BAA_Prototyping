import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-drag-drop-playground',
  templateUrl: './drag-drop-playground.component.html',
  styleUrls: ['./drag-drop-playground.component.scss']
})
export class DragDropPlaygroundComponent {

  persons: Array<Object>;
  moviesSorted: Array<String>;
  moviesMixedUp: Array<String>;
  isSorted: Boolean;
  isChecked: Boolean;

  constructor() {
    this.persons = [{name: 'Manuel'}, {name: 'Robertina'}, {name: 'Joana'}];

    this.moviesSorted = [
      'Episode I - The Phantom Menace',
      'Episode II - Attack of the Clones',
      'Episode III - Revenge of the Sith',
      'Episode IV - A New Hope',
      'Episode V - The Empire Strikes Back',
      'Episode VI - Return of the Jedi',
      'Episode VII - The Force Awakens',
      'Episode VIII - The Last Jedi',
      'Episode IX – The Rise of Skywalker',
    ];

    this.moviesMixedUp = [
      'Episode II - Attack of the Clones',
      'Episode V - The Empire Strikes Back',
      'Episode I - The Phantom Menace',
      'Episode IV - A New Hope',
      'Episode VI - Return of the Jedi',
      'Episode VIII - The Last Jedi',
      'Episode IX – The Rise of Skywalker',
      'Episode III - Revenge of the Sith',
      'Episode VII - The Force Awakens',
    ];

    this.isSorted = false;
    this.isChecked = false;

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.moviesMixedUp, event.previousIndex, event.currentIndex);
  }

  checkSorting(){
    this.isChecked = true;
    this.isSorted = this.moviesMixedUp.toString() === this.moviesSorted.toString();
  }

}
