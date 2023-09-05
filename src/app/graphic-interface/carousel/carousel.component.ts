import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent {
  options = { fullWidth: false };
  items = ["https://picsum.photos/200/300?image=0", "https://picsum.photos/200/300?image=1", "https://picsum.photos/200/300?image=2", "https://picsum.photos/200/300?image=3", "https://picsum.photos/200/300?image=4"]
  hrefs = ['one', 'two', 'three', 'four', 'five'];

  constructor(private http: HttpClient) {
  }

}
