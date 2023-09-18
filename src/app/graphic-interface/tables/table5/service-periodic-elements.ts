import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PERIODIC_ELEMENTS, PeriodicElement } from './periodic-elements';

@Injectable()
export class SomeService {

    doSomething(): Observable<PeriodicElement[]> {
        let randomlyFilledList = this.getTenRandomElements();
        return of(randomlyFilledList);
    }

    private getTenRandomElements(): PeriodicElement[] {
        let result: PeriodicElement[] = [];

        for (let i = 0; i < 10; i++) {
            let randomInt = Math.floor(Math.random() * (PERIODIC_ELEMENTS.length - 1));
            result.push(PERIODIC_ELEMENTS[randomInt]);
        }

        return result;
    }
}