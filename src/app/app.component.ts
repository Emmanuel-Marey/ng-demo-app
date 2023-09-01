import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as M from "materialize-css";

declare var hello: any;

declare var $:JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  options = { fullWidth: false };
  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"]
  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    M.AutoInit();

    //new hello();
  }

  ngAfterViewInit() {
  }
}
