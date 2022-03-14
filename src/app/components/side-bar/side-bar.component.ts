import { Component } from "@angular/core";

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  sideItems = [{title:'Home', show: true}, {title:'About', show: true}, {title:'Info', show: false}, {title:'contact', show: true}, {title:'Login', show: false}];

}
