import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() variant : string = "white";
  @Input() styleProps: { [klass: string]: any; } = {};
}
