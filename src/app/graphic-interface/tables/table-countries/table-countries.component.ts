import { Component } from '@angular/core';
import { Country, dataset } from './countries';
import { SortEvent, compare} from './sortable-header.directive';

// https://flaglog.com/

@Component({
    selector: 'app-responsive-table',
    templateUrl: './table-countries.component.html',
    styleUrls: ['./table-countries.component.css']
})
export class TableCountryComponent {
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
