import { Component } from '@angular/core';
import { IOlympicData } from './athletes';
import { ColDef, GridReadyEvent, RowHeightParams } from '@ag-grid-community/core';
import { HttpClient } from '@angular/common/http';
import { CountryCellRenderer } from './country-cell-renderer';

// https://countrycode.org/usa

@Component({
  selector: 'app-table-athletes',
  templateUrl: './table-athletes.component.html',
  styleUrls: ['./table-athletes.component.css']
})
export class TableAthleteComponent {

  columnDefs: ColDef[] = [
    { headerName: 'Athlete', field: 'athlete', headerTooltip: "The athlete's name", width: 180 },
    { headerName: 'Age', field: 'age', headerTooltip: "The athlete's age" },
    { headerName: 'Country', field: 'country', cellRenderer: CountryCellRenderer, headerTooltip: "The athlete's country", width: 180 },
    { headerName: 'Year', field: 'year', headerTooltip: "The year of the Olympics" },
    { headerName: 'Date', field: 'date', headerTooltip: "The date of the Olympics" },
    { headerName: 'Sport', field: 'sport', headerTooltip: "The sport", width: 200 },
    { headerName: 'Gold', field: 'gold', headerTooltip: "The number of gold medals" },
    { headerName: 'Silver', field: 'silver', headerTooltip: "The number of silver medals" },
    { headerName: 'Bronze', field: 'bronze', headerTooltip: "The number of bronze medals" },
    { headerName: 'Total', field: 'total', headerTooltip: "The total number of medals" },
  ];

  defaultColDef: ColDef = {
    width: 130,
    sortable: true,
    resizable: true,
    filter: true,
  };

  tooltipShowDelay = 500;

  rowData!: IOlympicData[];

  constructor(private http: HttpClient) {
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>('/assets/data/olympic-winners.json')
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