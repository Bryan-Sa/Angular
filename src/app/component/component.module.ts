import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
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
    NgStyle,
    FormsModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    BoxComponent,
  ]
})
export class ComponentModule { }
