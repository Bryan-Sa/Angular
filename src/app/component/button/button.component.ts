import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() title : string = "";
    @Input() border: boolean = false;
    @Input() size: string = "sizeDefault"
    @Input() variant: string = "default";
    @Output() btnClick = new EventEmitter();
    onClick(): void {
      this.btnClick.emit();
    }
}
