import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accordion-project';
 panelsFromParent  = [
    { "title": 'aa', "body": "Available" },
    { "title": 'erer', "body": "Ready" },
    { "title": 'eras', "body": "Started" }
];
}
