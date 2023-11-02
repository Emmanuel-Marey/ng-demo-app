import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicInterfaceComponent } from './graphic-interface/graphic-interface.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CarouselComponent } from './graphic-interface/carousel-images/carousel.component';
import { ButtonsComponent } from './graphic-interface/buttons/buttons.component';
import { ControlsComponent } from './graphic-interface/controls/controls.component';
import { GridsComponent } from './graphic-interface/grids/grids.component';
import { CardsComponent } from './graphic-interface/cards/cards.component';
import { TablesCollectionsComponent } from './graphic-interface/tables/tables.component';
import { TableCustomerComponent } from './graphic-interface/tables/table-customers/table-customers.component';
import { TableBalanceSheetComponent } from './graphic-interface/tables/table-balance-sheet/table-balance-sheet.component';
import { TableColoredGridComponent } from './graphic-interface/tables/table-profit-lost/table-profit-lost.component';
import { TableCountryComponent } from './graphic-interface/tables/table-countries/table-countries.component';
import { TableAthleteComponent } from './graphic-interface/tables/table-athletes/table-athletes.component';
import { TableAthleteGroupComponent } from './graphic-interface/tables/table-athletes/table-athletes-group.component';
import { TableStockComponent } from './graphic-interface/tables/table-stocks/table-stock.component';
import { TableFinance1Component } from './graphic-interface/tables/table-finance/table-finance1.component';
import { TableFinance2Component } from './graphic-interface/tables/table-finance/table-finance2.component';
import { CountryPipe } from './graphic-interface/tables/table-countries/country.pipe';
import { SortableHeaderDirective } from './graphic-interface/tables/table-countries/sortable-header.directive';
import { StorageComponent } from './storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// https://www.ag-grid.com/angular-data-grid/

// npm i @ag-grid-community/core
// npm i @ag-grid-community/angular
// npm i @ag-grid-community/client-side-row-model
// npm i @ag-grid-community/styles
// npm i @ag-grid-enterprise/menu
// npm i @ag-grid-enterprise/row-grouping
// npm i @ag-grid-enterprise/column-tool-panel
// npm i @ag-grid-enterprise/filter-tool-panel
// npm i @ag-grid-enterprise/set-filter
import { AgGridModule } from '@ag-grid-community/angular';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

// Register shared Modules globally
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  SetFilterModule
]);

@NgModule({
  declarations: [
    AppComponent,
    GraphicInterfaceComponent,
    DocumentationComponent,
    CarouselComponent,
    ButtonsComponent,
    ControlsComponent,
    GridsComponent,
    CardsComponent,
    TablesCollectionsComponent,
    TableCustomerComponent,
    TableBalanceSheetComponent,
    TableColoredGridComponent,
    TableCountryComponent,
    TableAthleteComponent,
    TableAthleteGroupComponent,
    TableStockComponent,
    TableFinance1Component,
    TableFinance2Component,
    CountryPipe,
    SortableHeaderDirective,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


