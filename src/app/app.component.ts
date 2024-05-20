import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductComponent, ProductAddComponent]
})
export class AppComponent {
  title = 'ng-app-fashon';
}
