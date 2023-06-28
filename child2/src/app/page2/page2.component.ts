import { Component, OnInit } from '@angular/core';
import { LibTestTinSpaService } from 'lib-test-tin-spa';

@Component({
  selector: 'child2-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor( private _tintestService: LibTestTinSpaService) { }
  curentCount: number = 0;
  ngOnInit() {
    this._tintestService.currentState.subscribe(state => {
      this.curentCount = state;
    });
  }

  pushData(){
    const event = new CustomEvent('eventCustom', { detail: 1 });
    dispatchEvent(event);
    // this._tintestService.changeState(this.curentCount + 1);
  }

}
