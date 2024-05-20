import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
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

  postProduct(){
    const forData = new FormData();
    forData.append("cmaterial", this.cmaterial);
    forData.append("cdescription", this.cdescription);
    forData.append("cimage", this.cimage);
    forData.append("ccolor", this.ccolor);
    forData.append("nstock", this.nstock.toString());
    forData.append("ctype_clothes", this.ctype_clothes);
    forData.append("csize", this.csize);
    forData.append("fprice", this.fprice.toString());
    console.log(forData)

    this.ProductService.CrearProducto(forData).subscribe(
      data => console.log(data)
    );
  }

}
