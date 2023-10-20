import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, RowHeightParams } from 'ag-grid-community';
import { IPosition, currencyCellFormatter, getPositions, lastCellRenderer, numberValueParser, percentageCellFormatter, quantityCellFormatter } from './positions';

@Component({
    selector: 'app-table-finance2',
    templateUrl: './table-finance2.component.html',
    styleUrls: ['./table-finance2.component.css']
})
export class TableFinance2Component {
    private gridApi!: GridApi;

    defaultColDef: ColDef = {
        resizable: true,
        editable: false
    };

    columnDefs: ColDef[] = [
        {
            headerName: 'Product', field: 'product',
            width: 200,
            minWidth: 200
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
            width: 100,
            minWidth: 100,
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

    rowData: IPosition[] | null = getPositions();

    onGridReady(params: GridReadyEvent) {
        console.log("on grid ready");
        console.log(this.rowData);
        this.gridApi = params.api;
    }

    onSynchonousUpdate() {
        var startMillis: number;

        var gridApi = this.gridApi!;
        var rowData = this.rowData!;

        setTimeout(function () {
            setMessage('Starting synchronous update');
            startMillis = new Date().getTime();

            let rowIndex = Math.floor(Math.random() * rowData.length);
            let positionToUpdate = rowData[rowIndex];

             var newPosition = copyObject(positionToUpdate);
        //     console.log("new item: " + newItem);
        //     newItem.previousSpot = newItem.current;
        //     newItem.spot = newItem.spot + randomBetween(0, 100) - 50;
        //     api.applyTransaction({ update: [newItem] });
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

    getRowHeight(params: RowHeightParams): number | undefined | null {
        return 24;
    }
}

function copyObject(positionToUpdate: IPosition) {
    throw new Error('Function not implemented.');
}

