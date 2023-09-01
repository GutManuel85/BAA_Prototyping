import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-area',
  templateUrl: './title-area.component.html',
  styleUrls: ['./title-area.component.scss']
})
export class TitleAreaComponent {
  @Input() title: String;
}
