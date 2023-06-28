import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LibTestTinSpaService } from 'lib-test-tin-spa';
import { Observable, fromEvent } from 'rxjs';
import { setData } from '../store/micro-frontend1.action';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'child2-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  data$: Observable<any>;
  constructor( private _tintestService: LibTestTinSpaService, private store: Store<{ data: any }> ) {
    this.data$ = store.select('data');
   }
  name: string='';
  curentCount: number = 0;
  ngOnInit() {
    // this._tintestService.currentState.subscribe(state => {
    //   this.curentCount = state;
    // });
    this.store.dispatch
  }
  pushData(){
    const event = new CustomEvent('eventCustom', { detail: 1 });
    dispatchEvent(event);
    // debugger;
    // this._tintestService.changeState(this.curentCount + 1);
  }
  // updateSharedData(): void {
  //   this.store.dispatch(setData({ data: 1 }));
  //   console.log(this.data$.subscribe())
  // }

}
