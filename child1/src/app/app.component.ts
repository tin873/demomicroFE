import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';

@Component({
  selector: 'child1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number=0;
  data$: Observable<any>;
  constructor(private store: Store<{ data: any }>) {
    this.data$ = store.select('data');
   }
  ngOnInit(): void {
    fromEvent(window, 'eventCustom').subscribe((event: any) => {
      console.log(event);
      this.count++;
    });
    // this.data$.subscribe(res => {
    //   console.log(res);
    // })
    // this.commonPKService.currentState.subscribe(state => {
    //   this.count = state;
    // });
  }
  title = 'child1';
}
