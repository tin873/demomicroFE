import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';

@Component({
  selector: 'title-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'title';
}
