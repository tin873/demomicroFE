import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number=0;
  ngOnInit(): void {
    fromEvent(window, 'eventCustom').subscribe((event: any) => {
      console.log(event);
      this.count++;
    })
  }
  title = 'child1';
}
