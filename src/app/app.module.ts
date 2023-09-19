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
import { TableColoredGridComponent } from './graphic-interface/tables/table-colored-grid/table-colored-grid.component';
import { Table4Component } from './graphic-interface/tables/table-responsive-table/responsive-table.component';
import { TablePeriodicElementsComponent } from './graphic-interface/tables/table-periodic-elements/table-periodic-elements.component';
import { CountryPipe } from './graphic-interface/tables/table-responsive-table/country.pipe';
import { SortableHeaderDirective } from './graphic-interface/tables/table-responsive-table/sortable-header.directive';
import { StorageComponent } from './storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeriodicElementsService } from './graphic-interface/tables/table-periodic-elements/periodic-elements-service';

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
    Table4Component,
    TablePeriodicElementsComponent,
    CountryPipe,
    SortableHeaderDirective,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PeriodicElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
