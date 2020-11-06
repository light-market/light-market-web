import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
    declarations: [LoadingSpinnerComponent, CardComponent, ModalComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [LoadingSpinnerComponent, CommonModule, FormsModule, CardComponent, ModalComponent]
})
export class SharedModule {

}