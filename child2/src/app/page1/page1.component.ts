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

  }
  pushData(){
    const event = new CustomEvent('eventCustom', { detail: 1 });
    dispatchEvent(event);
  }

}
