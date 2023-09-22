import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled' // Scroll to top on every Route click
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
