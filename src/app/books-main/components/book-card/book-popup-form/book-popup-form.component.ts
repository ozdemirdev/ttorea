import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BookService } from 'src/services/books-service';

@Component({
  selector: 'app-book-popup-form',
  templateUrl: './book-popup-form.component.html',
  styleUrls: ['./book-popup-form.component.scss']
})
export class BookPopupFormComponent implements OnInit {

  name = ''
  author = ''
  price = ''
  image = ''
  id= ''
  createdAt= ''
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private bookService: BookService, private dialogRef: MatDialogRef<BookPopupFormComponent>) { }

  ngOnInit(): void {
    this.bookService.getBooks(this.data.id).subscribe((res:any) => {
      if(this.data.operation === 'edit'){
        this.name = res.name
        this.author = res.author
        this.price = res.price
        this.image = res.image
        this.id= res.id
        this.createdAt = res.createdAt
      }
    })
  }

  apply(): any{
    
    if(this.data.operation === 'edit'){
      this.bookService.editBook(this.name, this.author, this.price, this.createdAt, this.image, this.id).subscribe(data=>{
        this.dialogRef.close(true)
      })
      
    }
    else if (this.data.operation === 'add'){
      this.bookService.addBook(this.name, this.author, this.price, new Date(Date.now()).toISOString(), this.image).subscribe(data => this.dialogRef.close([]))
    }
    
  }

}
