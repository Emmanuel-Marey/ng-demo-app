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
import { Table2Component } from './graphic-interface/tables/table2/table2.component';
import { Table3Component } from './graphic-interface/tables/table3/table3.component';
import { Table4Component } from './graphic-interface/tables/table4/table4.component';
import { CountryPipe } from './graphic-interface/tables/table4/country.pipe';
import { SortableHeaderDirective } from './graphic-interface/tables/table4/sortable-header.directive';
import { StorageComponent } from './storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    Table2Component,
    Table3Component,
    Table4Component,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
