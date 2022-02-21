import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  @Input() name: string = '';

  buttonClick() {
    alert('Prueba');
  }
}
