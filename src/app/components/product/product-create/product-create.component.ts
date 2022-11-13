import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.verifyIfEdit();
  }

  verifyIfEdit() {
    if (this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      this.productService.getById(id).subscribe((res) => {
        this.product = res;
      });
    }
  }


  createProduct() {
    if(this.product.id){
      this.productService.update(this.product.id, this.product).subscribe(
        () => {
        this.productService.showMessage("Atualizado com Sucesso!");
        this.router.navigateByUrl("/products")
      },
      error => {
        this.productService.showMessage("Erro!");
      });
    }else{
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage("Criado com Sucesso!");
        this.router.navigateByUrl("/products")
      }, 
      error => {
        this.productService.showMessage("Erro!");
      });
    }
   
  }

  cancel() {
    this.router.navigateByUrl("/products")
  }

}
