import { Component } from '@angular/core';
import {DanceMove} from "../../api/models";
import {MOVES} from "../../../../assets/boogie/data/moves";

@Component({
    templateUrl: './moves.component.html'
})
export class MovesComponent {

    Moves: DanceMove[] = MOVES;

}
