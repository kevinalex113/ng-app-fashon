import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-app',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './product-app.component.html',
  styleUrl: './product-app.component.css'
})
export default class ProductAppComponent {
  private fb =inject(FormBuilder);
  private productService = inject(ProductService)
  private router = inject(Router)

  form = this.fb.group({
    cmaterial: ["",[Validators.required]],
    cdescription: ["",[Validators.required]],
    cimage: ["path:",[Validators.required]],
    ccolor: ["",[Validators.required]],
    nstock: [,[Validators.required]],
    ctype_clothes: ["",[Validators.required]],
    csize: ["",[Validators.required]],
    fprice: [,[Validators.required]],
  });

  create(){
    console.log(this.form.value)
    const product = this.form.value;
    this.productService.CrearProducto(product).subscribe(() =>{
      /*this.router.navigate*/

    }
    );
  }

}
