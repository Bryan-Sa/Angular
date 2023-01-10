import { NgModule } from '@angular/core';
import { ComponentModule } from './../component/component.module';
import { LoginComponent } from './login/login.component';
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
