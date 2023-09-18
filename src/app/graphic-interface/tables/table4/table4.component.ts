import { Component } from '@angular/core';
import { Country, dataset } from './data';
import { SortEvent, compare} from './sortable-header.directive';

// https://flaglog.com/

@Component({
    selector: 'app-table4',
    templateUrl: './table4.component.html',
    styleUrls: ['./table4.component.css']
})
export class Table4Component {
    filter: string | undefined;
    data: Array<Country> = dataset;
    countries: Array<Country> = dataset;

    public onSort({ column, direction }: SortEvent) {
        if (direction === '' || column === '') {
            this.countries = this.data;
        } else {
            this.countries = [...this.data].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }
}
