import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovesComponent } from './moves.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MovesComponent }
    ])],
    exports: [RouterModule]
})
export class MovesRoutingModule { }
