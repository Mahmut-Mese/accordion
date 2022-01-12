import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeIndex = 0;

  @Input() opened = false;


  @Input() panels: any;



  toggle(i: number) {
    if (this.activeIndex === i) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = i
    }

  }

}