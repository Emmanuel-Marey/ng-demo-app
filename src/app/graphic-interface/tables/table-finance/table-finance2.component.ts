import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowHeightParams } from '@ag-grid-community/core';
import { IPosition, computeNewSpot, copyObject, currencyCellFormatter, getPositions, lastCellRenderer, numberValueParser, percentageCellFormatter, quantityCellFormatter, randomBetween } from './positions';
import { MarketCellRenderer } from './market-cell-renderer';

@Component({
    selector: 'app-table-finance2',
    templateUrl: './table-finance2.component.html',
    styleUrls: ['./table-finance2.component.css']
})
export class TableFinance2Component {
    private UPDATE_COUNT: number = 1;

    private gridApi!: GridApi;

    defaultColDef: ColDef = {
        resizable: true,
        editable: false
    };

    columnDefs: ColDef[] = [
        {
            headerName: 'Product', field: 'product',
            width: 180,
            minWidth: 180,
            sort: 'asc',
            cellStyle: { color: 'yellow' },
            cellRenderer: MarketCellRenderer, 
        },
        {
            headerName: 'Quantity', field: 'quantity',
            minWidth: 120,
            width: 120,
            editable: true,
            valueFormatter: quantityCellFormatter,
            valueParser: numberValueParser,
        },
        {
            headerName: 'Open', field: 'open',
            width: 120,
            minWidth: 120,
            valueFormatter: currencyCellFormatter
        },
        {
            headerName: 'Last', field: 'last',
            width: 120,
            minWidth: 120,
            valueFormatter: currencyCellFormatter,
            cellRenderer: lastCellRenderer,
        },
        {
            headerName: 'Spot', field: 'spot',
            width: 150,
            minWidth: 150,
            valueFormatter: currencyCellFormatter,
            cellRenderer: 'agAnimateShowChangeCellRenderer',
        },
        {
            headerName: 'Volatility', field: 'volatility',
            width: 150,
            minWidth: 150,
            valueFormatter: percentageCellFormatter,
        },
        {
            headerName: 'Total (quantity * spot)',
            width: 200,
            minWidth: 200,
            valueFormatter: currencyCellFormatter,
            valueGetter: 'data.quantity * data.spot',
            cellRenderer: 'agAnimateShowChangeCellRenderer',
        },
    ];

    rowData!: IPosition[];

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;

        this.rowData = getPositions();
        params.api.setRowData(this.rowData);
    }

    getRowHeight(params: RowHeightParams): number | undefined | null {
        return 24;
    }

    onSynchonousUpdate() {
        var startMillis: number;
        var spotsToChange: number;

        var gridApi = this.gridApi!;
        var rowData = this.rowData!;
        var updateCount = this.UPDATE_COUNT;

        setTimeout(function () {
            setMessage('Starting synchronous update');
            startMillis = new Date().getTime();

            spotsToChange = randomBetween(1, updateCount);
            for (var i = 0; i < spotsToChange; i++) {
                let rowIndex = Math.floor(Math.random() * rowData.length);

                // let row = rowData[rowIndex];
                // let position = row.data;

                // let volatility = newPosition.volatility;
                // let last = newPosition.spot;
                // let spot = computeNewSpot(last, volatility);

                // newPosition.spot = spot;
                // newPosition.last = spot;
            
                // gridApi.applyTransaction({ update: [newPosition] });
            }
        }, 0);

        setTimeout(function () {
            var endMillis = new Date().getTime();
            var duration = endMillis - startMillis;
            setMessage('Transaction took ' + duration.toLocaleString() + 'ms');
        }, 1000);

        function setMessage(msg: string) {
            var message = document.querySelector('#message') as any;
            message.innerHTML = msg;
        }
    }

    onAsynchrounousUpdate() {
        var startMillis = new Date().getTime();
        setMessage('Starting asynchronous update');

        setTimeout(function () {
            var endMillis = new Date().getTime();
            var duration = endMillis - startMillis;
            setMessage('Transaction took ' + duration.toLocaleString() + 'ms');
        }, 0);

        function setMessage(msg: string) {
            var message = document.querySelector('#message') as any;
            message.innerHTML = msg;
        }
    }
}