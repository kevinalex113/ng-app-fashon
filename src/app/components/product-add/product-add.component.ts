import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export  class ProductAddComponent implements OnInit{
  
    cmaterial: string = "hola";
    cdescription: string = "a";
    cimage: string = "ao";
    ccolor: string = "h";
    nstock: number= 0;
    ctype_clothes: string = "a";
    csize: string = "s";
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

    /*const forData ={
        nid_clothes: "h",
        cmaterial: "algodon",
        cdescription: "levise",
        cimage: "path:",
        ccolor: "verde",
        nstock: 2,
        ctype_clothes: "hh",
        csize: "chico",
        fprice: 15.5,
        acategorias: ["hol","hola2"]

    };*/
    

    this.ProductService.CrearProducto(forData).subscribe(
      data => console.log(data)
    )
  }

}
