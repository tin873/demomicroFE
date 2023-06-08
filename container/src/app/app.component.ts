import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleSpaService } from 'src/services/single-spa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'container';
  name: string="";

  @ViewChild('appContainer', { static: true })
  appContainerRef: ElementRef;
  constructor(private singleSpaService: SingleSpaService) { }

  ngOnInit() {
    this.mount().subscribe();
  }

  mount(): Observable<unknown> {
    return this.singleSpaService.mount('child1', this.appContainerRef.nativeElement);
  }

  unmount(): Observable<unknown> {
    return this.singleSpaService.unmount('child1');
  }

  pushData(){
    const event = new CustomEvent('eventCustom', { detail: this.name });
    dispatchEvent(event);
  }
}
