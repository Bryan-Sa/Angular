import { ComponentModule } from './../component/component.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    NgModule,
    CommonModule,
    ComponentModule,
  ]
})
export class ScreenModule { }
