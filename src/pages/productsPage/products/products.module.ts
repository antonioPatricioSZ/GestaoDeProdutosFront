import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from '../../productsPage/products/products-routing.module';
import { ProductsComponent } from '../../productsPage/products/products.component';

@NgModule({
  providers: [],
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule {}
