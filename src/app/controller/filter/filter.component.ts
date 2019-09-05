import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    // sortTypeList: string[] = [ 'firstName', 'id', 'gender'];
    // sortType: string = this.sortTypeList[0];
    sortTypeList: Object[] = [
        {key: 'firstName', value:  'firstName'},
        {key: 'id', value:  'id'},
        {key: 'gender', value:  'gender'},
    ];
    sortType: string = this.sortTypeList[0]['key'];

    items = [
        {
            firstName: 'Dean', lastName: 'Sofer',
            id: 1, gender: 'Male'
        },
        {
            firstName: 'Dean', lastName: 'Kuntz',
            id: 2, gender: 'Male'
        },
        {
            firstName: 'Peter', lastName: 'Piper',
            id: 3, gender: 'Female'
        },
        {
            firstName: 'Peter', lastName: 'Darwin',
            id: 4, gender: 'Male'
        },
        {
            firstName: 'Janet', lastName: 'Piper',
            id: 5, gender: 'Female'
        },
        {
            firstName: 'Dan', lastName: 'Doyon',
            id: 6, gender: 'Male'
        },
        {
            firstName: 'Andy', lastName: 'Joslin',
            id: 1, gender: 'Male'
        },
    ];

    sex: string = 'male';

    contacts;

    currentDate: Date = new Date();

    counts = [
        { id: '0', value: 1 },
        { id: '1', value: 2 },
        { id: '2', value: 3 },
        { id: '3', value: 4 },
        { id: '4', value: 5 }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    randomChange() {
        this.counts[Math.round(4 * Math.random())].value = Math.round(10 * Math.random());
    }

    keypressCallback = function(e) {
        e.target.value += "enter";
        console.log(e);
        alert("输入enter");
        e.preventDefault();
    };

    addContact(newVal) {
        this.contacts = newVal;
    }

}
