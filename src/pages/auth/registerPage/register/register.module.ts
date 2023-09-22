import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from '../../registerPage/register/register-routing.module';
import { RegisterComponent } from '../../registerPage/register/register.component';

@NgModule({
  providers: [],
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule],
})
export class RegisterModule {}
