import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicinterfaceComponent } from './graphic-interface/graphic-interface.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CarouselComponent } from './graphic-interface/carousel/carousel.component';
import { ButtonsComponent } from './graphic-interface/buttons/buttons.component';
import { ControlsComponent } from './graphic-interface/controls/controls.component';
import { GridsComponent } from './graphic-interface/grids/grids.component';
import { CardsComponent } from './graphic-interface/cards/cards.component';
import { TablesCollectionsComponent } from './graphic-interface/tables/tables.component';
import { Table1Component } from './graphic-interface/tables/table1/table1.component';
import { Table2Component } from './graphic-interface/tables/table2/table2.component';
import { Table3Component } from './graphic-interface/tables/table3/table3.component';
import { StorageComponent } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicinterfaceComponent,
    DocumentationComponent,
    CarouselComponent,
    ButtonsComponent,
    ControlsComponent,
    GridsComponent,
    CardsComponent,
    TablesCollectionsComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
