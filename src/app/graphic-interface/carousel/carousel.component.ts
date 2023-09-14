import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as M from "materialize-css";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  options = { fullWidth: false };
  items = [
    "../assets/images/0-200x300.jpg", 
    "../assets/images/1-200x300.jpg", 
    "../assets/images/2-200x300.jpg",
    "../assets/images/3-200x300.jpg",
    "../assets/images/4-200x300.jpg"]
  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var elements = document.querySelectorAll('.carousel');
    M.Carousel.init(elements, this.options);
  }
}