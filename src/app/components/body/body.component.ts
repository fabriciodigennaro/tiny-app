import { Component, Input } from "@angular/core";
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  @Input() name: string = '';
  date: Date = new Date();
  text: string = 'neuquen';

  alertMessage(message: string) {
    alert(message);
  }
}
