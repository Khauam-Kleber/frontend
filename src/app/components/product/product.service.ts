import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product){
    return this.http.post<Product>(`${environment.apiUrl}${this.baseUrl}`, product);
  }

  get(){
    return this.http.get<Product[]>(`${environment.apiUrl}${this.baseUrl}`);
  }
  
}
