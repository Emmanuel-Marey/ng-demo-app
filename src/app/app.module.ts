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
import { TableFinance1Component } from './graphic-interface/tables/table-finance/table-finance1.component';
import { TableFinance2Component } from './graphic-interface/tables/table-finance/table-finance2.component';
import { CountryPipe } from './graphic-interface/tables/table-countries/country.pipe';
import { SortableHeaderDirective } from './graphic-interface/tables/table-countries/sortable-header.directive';
import { StorageComponent } from './storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

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


