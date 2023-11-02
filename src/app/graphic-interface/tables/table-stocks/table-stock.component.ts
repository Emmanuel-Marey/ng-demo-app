import { Component } from '@angular/core';
import { ColDef, RowHeightParams } from '@ag-grid-community/core';

function getRowData() {
    var rowData = [];
    for (var i = 1; i <= 12; i++) {
        rowData.push({
            group: i < 5 ? 'A' : 'B',
            a: (i * 863) % 100,
            b: (i * 811) % 100,
            c: (i * 743) % 100,
            d: (i * 677) % 100,
            e: (i * 619) % 100,
            f: (i * 571) % 100,
        });
    }
    return rowData;
}

@Component({
    selector: 'app-table-stock',
    templateUrl: './table-stock.component.html',
    styleUrls: ['./table-stock.component.css']
})
export class TableStockComponent {
    defaultColDef: ColDef = {
        flex: 1,
        sortable: true,
    };

    columnDefs: ColDef[] = [
        { field: 'a', type: 'valueColumn' },
        { field: 'b', type: 'valueColumn' },
        { field: 'c', type: 'valueColumn' },
        { field: 'd', type: 'valueColumn' },
        { field: 'e', type: 'valueColumn' },
        { field: 'f', type: 'valueColumn' },
        {
            headerName: 'Total',
            valueGetter: 'data.a + data.b + data.c + data.d + data.e + data.f',
            editable: false,
            cellClass: 'total-col',
        },
    ];

    columnTypes: { [key: string]: ColDef; } = {
        valueColumn: {
            editable: true,
            valueParser: 'Number(newValue)',
            filter: 'agNumberColumnFilter',
        },
    };

    rowData: any[] | null = getRowData();

    getRowHeight(params: RowHeightParams): number | undefined | null {
        return 24;
    }
}