import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovesRoutingModule } from './moves-routing.module';
import { MovesComponent } from './moves.component';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {DividerModule} from "primeng/divider";
import {MoveCardModule} from "../shared/move-card/move-card.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
    imports: [
        CommonModule,
        MovesRoutingModule,
        InputTextModule,
        CardModule,
        TagModule,
        DividerModule,
        MoveCardModule,
        ReactiveFormsModule,
        CheckboxModule,
        FormsModule
    ],
    declarations: [MovesComponent]
})
export class MovesModule { }
