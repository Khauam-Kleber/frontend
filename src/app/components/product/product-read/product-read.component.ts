import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.get().subscribe((res) => {
      this.products = res;
    },
      error => {
        this.productService.showMessage("Erro ao buscar");
      });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe((res) => {
      this.getProducts();
    }, error => {
      this.productService.showMessage("Erro ao deletar");
    });
  }
}
