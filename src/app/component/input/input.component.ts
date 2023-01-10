import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type : string = "text";
  @Input() leftIcon: string = "";
  @Input() rightIcon: string = "";
  @Input() placeholder : string = "";
  @Input() value : string = "";
  @Output() valueChange : EventEmitter<string> = new EventEmitter<string>();

  override(event: Event) {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.valueChange.emit(this.value);
  }
}
