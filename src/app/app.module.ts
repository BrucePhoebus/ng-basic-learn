import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './core/app.component';
import { TowWayBindComponent } from './tow-way-bind/tow-way-bind.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

const appRouters: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: TableDemoComponent },
  { path: 'toWayBind', component: TowWayBindComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TowWayBindComponent,
    TableDemoComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRouters,
        {enableTracing: false}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
