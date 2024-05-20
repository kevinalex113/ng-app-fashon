import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{
    cmaterial: string = "";
    cdescription: string = "";
    cimage: string = "";
    ccolor: string = "";
    nstock: number= 0;
    ctype_clothes: string = "";
    csize: string = "";
    fprice: number = 0;

    constructor(private ProductService:ProductService){}




  ngOnInit(): void {
    
  }

}
