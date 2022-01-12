import { Component, OnInit } from '@angular/core';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private accordionService: AccordionService
  ) { }
  title = 'accordion-project';
  panelsFromParent: any;
  ngOnInit() {
    this.accordionService.getAllPanels().subscribe((panels) => {
      this.panelsFromParent = panels;
    });;

  }
}
