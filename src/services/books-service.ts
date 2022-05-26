import { Injectable } from "@angular/core"
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class BookService{

    apiUrl = 'https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books'
    constructor(private http: HttpClient){}

    getBooks(id?: any) {
        const url = id ? this.apiUrl + '/' + id : this.apiUrl
        return this.http.get<any>(url)
    }

    editBook(name: any, author: any, price: any, createdAt: any, image: any, id: any){
        const url = this.apiUrl + '/' + id 

        const body = { name: name, author: author, price: price, createdAt: createdAt, image:image, id: id};
        return this.http.put<any>(url, body)
    }

    addBook(name: any, author: any, price: any, createdAt: any, image: any){
        const headers = new HttpHeaders()
            .append('Access-Control-Allow-Headers', 'Content-Type')
            .append('Access-Control-Allow-Origin', '*');

        const params = new HttpParams()
			.set('name', name)
			.set('author', author)
			.set('price', price)
			.set('createdAt', createdAt)
			.set('image', image );

        return this.http.post<any>(this.apiUrl, params, {headers: headers})
    }

    deleteBook(id: any){
        const url = this.apiUrl + '/' + id
        const headers = new HttpHeaders()
            .append('Access-Control-Allow-Headers', 'Content-Type')
            .append('Access-Control-Allow-Origin', '*');

        return this.http.delete<any>(url, {headers: headers})
    }
}