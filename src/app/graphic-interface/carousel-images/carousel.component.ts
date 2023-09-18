import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [ './carousel.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  current = 0;
  imageList = [
    './assets/images/carousel/first-slide.jpg',
    './assets/images/carousel/second-slide.jpg',
    './assets/images/carousel/third-slide.jpg',
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.imageList.length;
    }, 2500);
  }
}