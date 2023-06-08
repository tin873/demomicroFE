import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'child2-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }
  name: string='';

  ngOnInit() {
    fromEvent(window, 'eventCustom').subscribe((event: any) => {
      console.log(event);
      this.name = event;
    })
  }

}
