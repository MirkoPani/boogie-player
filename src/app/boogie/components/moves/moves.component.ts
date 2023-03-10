import {Component, OnInit} from '@angular/core';
import {DanceMove} from "../../api/models";
import {MOVES} from "../../../../assets/boogie/data/moves";
import {UntypedFormControl} from "@angular/forms";
import {Subject, switchMap, takeUntil} from "rxjs";

@Component({
    templateUrl: './moves.component.html'
})
export class MovesComponent implements OnInit {

    moves: DanceMove[] = MOVES;
    filteredMoves: DanceMove[] = [];


    selectedDanceTypes: string[] = ['Boogie Woogie','Lindy Hop'];
    searchInputControl: UntypedFormControl = new UntypedFormControl();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    ngOnInit(): void {
        this.moves.sort((a, b) => a.name.localeCompare(b.name));
        this.filteredMoves = this.moves;

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(query => {
                this.filterMoves(query);
            });

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }


    filterMoves(query: string): void {
        console.log("query:"+ query);
        let moves: DanceMove[] = [];

        // Start by filtering by search query
        if (query) {
            moves = this.moves.filter(mov =>
                mov.name.toLowerCase().includes(query.toLowerCase()) ||
                mov.description.toLowerCase().includes(query.toLowerCase())
            );
        } else {
            moves = this.moves;
        }

       let afterStepMoves : DanceMove[] = [];

        //Filter by dance type
        for(let value of this.selectedDanceTypes)
        {
            const containingLabel  = moves.filter(a => a.labels.includes(value))
            afterStepMoves = afterStepMoves.concat(containingLabel);
        }

        let map = new Map();
        for(const move of afterStepMoves) {
            map.set(move.name, move);
        }
        moves = [...map.values()]

        // Sort the contacts by the name field by default
        moves.sort((a, b) => a.name.localeCompare(b.name));
        this.filteredMoves = moves;
    }

    filterMovesByDanceType() {
        this.filterMoves(this.searchInputControl.value);
    }
}
