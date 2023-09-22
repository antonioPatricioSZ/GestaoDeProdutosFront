import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  providers: [],
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
