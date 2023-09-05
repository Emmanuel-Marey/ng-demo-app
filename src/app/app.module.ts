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

@NgModule({
  declarations: [
    AppComponent,
    GraphicinterfaceComponent,
    DocumentationComponent,
    CarouselComponent,
    ButtonsComponent,
    ControlsComponent,
    GridsComponent,
    CardsComponent
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
