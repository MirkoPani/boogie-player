import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveCardComponent } from './move-card.component';
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {DividerModule} from "primeng/divider";



@NgModule({
    declarations: [
        MoveCardComponent
    ],
    exports: [
        MoveCardComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        TagModule,
        DividerModule
    ]
})
export class MoveCardModule { }
