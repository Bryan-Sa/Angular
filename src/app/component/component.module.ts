import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { BoxComponent } from './box/box.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    BoxComponent,
  ],
  imports: [
    CommonModule,
    NgClass,
    NgStyle
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    BoxComponent,
  ]
})
export class ComponentModule { }
