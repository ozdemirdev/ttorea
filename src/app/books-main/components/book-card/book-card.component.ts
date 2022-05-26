import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BookPopupFormComponent } from './book-popup-form/book-popup-form.component';
import { BookService } from 'src/services/books-service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() name: string = ''
  @Input() author: string = ''
  @Input() price: string = ''
  @Input() image: string = ''
  @Input() id: string = ''
  @Input() createdAt: string = ''

  @Output() eventDone = new EventEmitter();

  constructor(public dialog: MatDialog, private bookService: BookService) { }

  ngOnInit(): void {
  }

  openDialog(operation: string) {
    const dialogRef = this.dialog.open(BookPopupFormComponent, {data: {id: this.id, operation: operation}});
    dialogRef.afterClosed().subscribe(result => {
      this.eventDone.emit('getBooksData')
    });
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(res => {
      console.log(res)
      this.eventDone.emit('getBooksData')
    })
    
  }

}
