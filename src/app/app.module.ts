import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './core/app.component';
import { TowWayBindComponent } from './tow-way-bind/tow-way-bind.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NotePracticeComponent } from './controller/note-practice/note-practice.component';
import { MemoExerciseComponent } from './controller/memo-exercise/memo-exercise.component';
import { FilterComponent } from './controller/filter/filter.component';
import { SortPipe } from './pipe/sort.pipe';
import { SexFormatPipe } from './pipe/sex-format.pipe';
import { SelectFilterPipe } from './pipe/select-filter.pipe';
import { ExpandDataPipe } from './pipe/expand-data.pipe';

const appRouters: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'table', component: TableDemoComponent },
	{ path: 'toWayBind', component: TowWayBindComponent },
	{ path: 'note', component: NotePracticeComponent },
	{ path: 'memo', component: MemoExerciseComponent },
	{ path: 'filter', component: FilterComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		TowWayBindComponent,
		TableDemoComponent,
		HomeComponent,
		HeaderComponent,
		NotePracticeComponent,
		MemoExerciseComponent,
		FilterComponent,
		SortPipe,
		SexFormatPipe,
		SelectFilterPipe,
		ExpandDataPipe
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRouters,
			{ enableTracing: false }
		),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
