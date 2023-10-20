import { Component } from '@angular/core';
import { IOlympicData } from './athletes';
import { ColDef, GridReadyEvent, RowHeightParams } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

import { ModuleRegistry } from '@ag-grid-community/core';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { CountryCellRenderer } from './country-cell-renderer';

// Register shared Modules globally
ModuleRegistry.registerModules([
    RowGroupingModule
  ]);

@Component({
    selector: 'app-table-athletes-group',
    templateUrl: './table-athletes-group.component.html',
    styleUrls: ['./table-athletes-group.component.css']
})
export class TableAthleteGroupComponent {
    columnDefs: ColDef[] = [
        { headerName: 'Athlete', field: 'country', cellRenderer: CountryCellRenderer, enableRowGroup: true },
        { headerName: 'Year', field: 'year', enableRowGroup: true },
        { headerName: 'Athlete', field: 'athlete', minWidth: 180 },
        { headerName: 'Gold', field: 'gold' },
        { headerName: 'Silver', field: 'silver' },
        { headerName: 'Total', field: 'bronze' },
    ];

    public defaultColDef: ColDef = {
        flex: 1,
        minWidth: 150,
    };

    public autoGroupColumnDef: ColDef = {
        minWidth: 200,
    };

    public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';

    public rowData!: IOlympicData[];

    constructor(private http: HttpClient) {
    }

    onGridReady(params: GridReadyEvent<IOlympicData>) {
        this.http.get<IOlympicData[]>('/assets/data/olympic-winners.json')
            .subscribe((data) => {
                data.forEach(function (dataItem: any, index: number) {
                    dataItem.rowHeight = 24;
                });
                this.rowData = data;
            });
    }

    getRowHeight(params: RowHeightParams): number | undefined | null {
        return params.data.rowHeight;
    }
}