import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() title : string = "";
}