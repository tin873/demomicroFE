import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleSpaService } from 'src/services/single-spa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Thời trang thế giới';
  name: string="";
  constructor(private singleSpaService: SingleSpaService) { }


  ngOnInit() {
    this.mountElement1().subscribe();
  }

  @ViewChild('appContainer1', { static: true })
  appContainerRef1: ElementRef;
  mountElement1(): Observable<unknown> {
    return this.singleSpaService.mount('child1', this.appContainerRef1.nativeElement);
  }
}
