import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-check',
  templateUrl: './result-check.component.html',
  styleUrls: ['./result-check.component.scss']
})
export class ResultCheckComponent {

@Input() isCorrect = false;
@Input() isChecked = false;

}
