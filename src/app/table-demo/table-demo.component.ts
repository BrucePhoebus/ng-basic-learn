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

    name: string;

    tel: number;

    sex: string;


    constructor() {
        this.sex = '男';
    }

    ngOnInit() {
    }

    onSubmit(valid: boolean) {

    }

}
