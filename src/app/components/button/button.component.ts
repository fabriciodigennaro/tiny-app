import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() color: string = 'light';
  @Output() clickAlert = new EventEmitter<string>();

  buttonClick() {
    this.color = 'dark';
    this.clickAlert.emit(`Se cambió el tema`);
  }
}
