import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { BookPopupFormComponent } from './components/book-card/book-popup-form/book-popup-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookCardComponent,
    MainWrapperComponent,
    BookPopupFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  exports:[MainWrapperComponent]
})
export class BooksMainModule { }
