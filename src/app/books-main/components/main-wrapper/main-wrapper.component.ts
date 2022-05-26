import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/books-service';
import {MatDialog} from '@angular/material/dialog';
import { BookPopupFormComponent } from '../book-card/book-popup-form/book-popup-form.component';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

  searchText: string = ''
  books: any
  filteredBooks: any

  constructor(private bookService: BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.getBooksData();
  }

  getBooksData(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data
      this.filteredBooks = data
      this.filteredBooks = Object.assign([], this.filteredBooks)
      
     })
  }

  search(event:any){
    this.searchText = event.target.value;
    this.searchText ? this.filteredBooks = this.books?.filter((item: any) => item.name.toUpperCase().includes(this.searchText.toUpperCase())) : this.filteredBooks = this.books
  }

  openDialog(operation: string) {
    const dialogRef = this.dialog.open(BookPopupFormComponent, {data: {operation: operation}});
    dialogRef.afterClosed().subscribe(result => {
      this.getBooksData()
    })
  }

}
