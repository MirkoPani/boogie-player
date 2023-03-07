import {Component, Input} from '@angular/core';
import {DanceMove} from "../../../api/models";

@Component({
  selector: 'app-move-card',
  templateUrl: './move-card.component.html',
  styleUrls: ['./move-card.component.scss']
})
export class MoveCardComponent {

    @Input() Card! : DanceMove;

}
