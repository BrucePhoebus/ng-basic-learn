import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-memo-exercise',
	templateUrl: './memo-exercise.component.html',
	styleUrls: ['./memo-exercise.component.css']
})
export class MemoExerciseComponent implements OnInit {

	memoList = [
		{ name: "吃饭", isChecked: false },
		{ name: "睡觉", isChecked: false },
		{ name: "打豆豆", isChecked: false },
	];

	newMemo: string;

	constructor() { }

	ngOnInit() {
	}

	add() {
		if (!this.newMemo) {
			return;
		}
		const obj = {
			name: this.newMemo,
			isChecked: false
		};
		this.memoList.unshift(obj);
		this.newMemo = '';
	}
	delete() {
		const oldArr = this.memoList;
		this.memoList = [];
		oldArr.forEach((item) => {
			if (!item.isChecked) {
				this.memoList.push(item);
			}
		});
	}

}
