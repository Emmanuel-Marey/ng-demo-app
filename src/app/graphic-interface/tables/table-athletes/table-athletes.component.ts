import { Component } from '@angular/core';
import { IOlympicData } from './athletes';
import { ColDef, ICellRendererComp, ICellRendererParams, GridReadyEvent, RowHeightParams, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

// npm i ag-grid-angular
// npm i ag-grid-community
// npm i @ag-grid-community/core
// npm i @ag-grid-community/angular

// https://www.ag-grid.com/angular-data-grid/
// https://countrycode.org/usa
class CountryCellRenderer implements ICellRendererComp {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    const flag = `<img border="0" width="15" height="10" src="/assets/images/flag/${params.data.code}.png">`;
    const eTemp = document.createElement('div');
    eTemp.innerHTML = `<span style="cursor: default;">${flag} ${params.value}</span>`;
    this.eGui = eTemp.firstElementChild as HTMLElement;
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}

@Component({
  selector: 'app-table-athletes',
  templateUrl: './table-athletes.component.html',
  styleUrls: ['./table-athletes.component.css']
})
export class TableTicketComponent {

  columnDefs: ColDef[] = [
    {
      headerName: 'Athlete',
      field: 'athlete',
      headerTooltip: "The athlete's name",
      width: 180
    },
    {
      headerName: 'Age',
      field: 'age',
      headerTooltip: "The athlete's age",
    },
    {
      headerName: 'Country',
      field: 'country',
      cellRenderer: CountryCellRenderer, 
      headerTooltip: "The athlete's country",
      width: 180
    },
    {
      headerName: 'Year',
      field: 'year',
      headerTooltip: "The year of the Olympics",
    },
    {
      headerName: 'Date',
      field: 'date',
      headerTooltip: "The date of the Olympics",
    },
    {
      headerName: 'Sport',
      field: 'sport',
      headerTooltip: "The sport",
      width: 200
    },
    {
      headerName: 'Gold',
      field: 'gold',
      headerTooltip: "The number of gold medals",
    },
    {
      headerName: 'Silver',
      field: 'silver',
      headerTooltip: "The number of silver medals",
    },
    {
      headerName: 'Bronze',
      field: 'bronze',
      headerTooltip: "The number of bronze medals",
    },
    {
      headerName: 'Total',
      field: 'total',
      headerTooltip: "The total number of medals",
    },
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

  getContextMenuItems(params: GetContextMenuItemsParams): (string | MenuItemDef)[] {
    var result: (string | MenuItemDef)[] = [
      {
        // custom item
        name: 'Alert ' + params.value,
        action: () => {
          window.alert('Alerting about ' + params.value);
        },
        cssClasses: ['redFont', 'bold'],
      },
      {
        // custom item
        name: 'Always Disabled',
        disabled: true,
        tooltip:
          'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!',
      },
      {
        name: 'Country',
        subMenu: [
          {
            name: 'Ireland',
            action: () => {
              console.log('Ireland was pressed');
            },
            icon: this.createFlagImg('ie'),
          },
          {
            name: 'United-Kingdom',
            action: () => {
              console.log('UK was pressed');
            },
            icon: this.createFlagImg('gb'),
          },
          {
            name: 'France',
            action: () => {
              console.log('France was pressed');
            },
            icon: this.createFlagImg('fr'),
          },
        ],
      },
      'separator',
      {
        // custom item
        name: 'Checked',
        checked: true,
        action: () => {
          console.log('Checked Selected');
        },
      },
      'copy'
    ];
    return result;
  }

  private createFlagImg(flag: string): string {
    return '<img border="0" width="15" height="10" src="/assets/images/flag/' + flag + '.png"/>';
  }
}