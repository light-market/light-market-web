import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
    declarations : [LoadingSpinnerComponent, CardComponent],
    imports: [CommonModule , FormsModule],
    exports : [LoadingSpinnerComponent,CommonModule , FormsModule,CardComponent]
})
export class SharedModule {

}