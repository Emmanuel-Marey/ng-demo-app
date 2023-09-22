import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Article {
  id: string,
  title: string,
  content: string
}

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: [ './documentation.component.css']
})
export class DocumentationComponent implements OnInit, AfterViewInit {
  article$!: Observable<Article>;

  debugPosition: number = 0;
  activeHeadingIndex: number = 0;
  headingPositions: number[] = [];
  headingElements: Element[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("/assets/documentation/mecanique-quantique.html", { responseType: 'text' }).subscribe(
      data => {
        this.article$ = of(
          {
            id: 'doc-mecanique-quantique',
            title: 'Mécanique quantique',
            content: data
          }
      );
      this.getHeading();
    });
  }

  ngAfterViewInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  getTableOfContents() {
    if (this.headingPositions.length) {
      const position = window.scrollY;
      this.debugPosition = position;

      this.headingPositions.forEach((headingPositon, index) => {
        if (headingPositon < position) {
          this.activeHeadingIndex = index;
          // console.log("Position: " + position + " => Active heading index: " + index);
        }
      });
    }
  }

  scrollToHeading(event: any) {
    const id = event.target.hash.replace('#', '');
    if (id !== '') {
      let doc = document.getElementById(id);
      if (doc) {
        const rectTop = doc.getBoundingClientRect().top;
        const position = window.scrollY;
        const top = rectTop + position;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    }
    return false;
  }

  private getHeading() {
    setTimeout(() => {
      const headingTagElements = document.querySelectorAll(
        '.main__content h2, .main__content h3, .main__content h4'
      );
      headingTagElements.forEach((headingTagElement, index) => {
        headingTagElement.id = 'heading' + index;
        this.headingElements.push(headingTagElement);

        let top = Math.round(headingTagElement.getBoundingClientRect().top) - 1;
        this.headingPositions.push(top);

        console.log("Heading tag element: " + headingTagElement.id + " / " + headingTagElement.tagName + " / " + headingTagElement.textContent + ", position: " + top);
      });
    }, 100);
  }
}

/*
Heading tag element: heading0 / H2 / Introduction, position: 311
documentation.component.ts:87
Heading tag element: heading1 / H3 / Panorama général, position: 1133
documentation.component.ts:87
Heading tag element: heading2 / H3 / Lois de probabilités, position: 1273
documentation.component.ts:87
Heading tag element: heading3 / H3 / Existence des quanta, position: 1555
documentation.component.ts:87
Heading tag element: heading4 / H2 / Histoire, position: 1867
documentation.component.ts:87
Heading tag element: heading5 / H2 / Notions fondamentales, position: 2395
documentation.component.ts:87
Heading tag element: heading6 / H3 / État quantique, position: 2571
documentation.component.ts:87
Heading tag element: heading7 / H3 / Principe de superposition, position: 2734
documentation.component.ts:87
Heading tag element: heading8 / H2 / Les Pères Fondateurs, position: 3060
documentation.component.ts:87
Heading tag element: heading9 / H3 / Albert Einstein, position: 3148
*/
