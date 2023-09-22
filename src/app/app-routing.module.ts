import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/homePage/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('../pages/auth/loginPage/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../pages/auth/registerPage/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../pages/productsPage/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../pages/categoriesPage/categories/categories.module').then(
        (module) => module.CategoriesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
