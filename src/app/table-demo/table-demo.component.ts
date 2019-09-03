import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-demo',
	templateUrl: './table-demo.component.html',
	styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

	students = [
		{
			'Name': 'Alfreds Futterkiste',
			'Country': 'Germany'
		},
		{
			'Name': 'Berglunds snabbköp',
			'Country': 'Sweden'
		},
		{
			'Name': 'Centro comercial Moctezuma',
			'Country': 'Mexico'
		},
		{
			'Name': 'Ernst Handel',
			'Country': 'Austria'
		}
	];

	lis = [
		{ name: 'Tom', age: 12 },
		{ name: 'Tom2', age: 13 },
		{ name: 'Tom3', age: 14 },
		{ name: 'Tom4', age: 15 },
		{ name: 'Tom5', age: 16 }
	];

	name: string;

	tel: number;

	sex: string;

	overStyle: object;


	constructor() {
		this.sex = '男';
	}

	ngOnInit() {
	}

	onSubmit(valid: boolean) {

	}

	leave() {
		this.overStyle = { 'background-color': 'green' };
	}

	over() {
		this.overStyle = { 'background-color': 'blue' };
	}

}
