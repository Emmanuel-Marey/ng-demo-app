import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { PeriodicElementsService } from './periodic-elements-service';
import { PeriodicElement } from './periodic-elements';

@Component({
  selector: 'app-table-periodic-elements',
  templateUrl: './table-periodic-elements.component.html',
  styleUrls: ['./table-periodic-elements.component.css']
})
export class TablePeriodicElementsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  // @ViewChild(MatPaginator, { static: true })
  // paginator: MatPaginator;

  constructor(
    private periodicElementsService: PeriodicElementsService
  ) { }

  ngOnInit(): void {
    //this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.periodicElementsService.getElements().subscribe(
      (data: PeriodicElement[]) => { this.dataSource.data = data; }
    );
  }
}