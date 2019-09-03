import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
	selector: 'app-note-practice',
	templateUrl: './note-practice.component.html',
	styleUrls: ['./note-practice.component.css']
})
export class NotePracticeComponent implements OnInit {

	message: string = '';

	constructor() { }

	ngOnInit() {
	}

	getCount() {
		if (this.message.length > 100) {
			// 判断，当输入的内容长度大于100时，将输入的内容进行截取，截取内容放入到文本框内，这样的话文本框内就不能再输入超过100长度的内容。
			this.message = this.message.slice(0, 100);
		}
		return 100 - this.message.length;
	}
	save() {
		// 将存储的js值内容转化为json字符串的形式存入。
		sessionStorage.setItem('note_key', JSON.stringify(this.message));
		window.alert('保存成功！');
		this.message = '';
	}
	read() {
		// 考虑到用户一进入就进行读取数据，如果是空串“”，他只是一个js正常字符串，而非json字符串，所以调用parse是报错的。所以考虑传入"{}"或者"[]"，但是如果传入的"{}"，则转化为js对象，得到的是{object,object}。所以只能传入"[]".
		this.message = JSON.parse(sessionStorage.getItem('note_key') || '[]');
	}
	delete() {
		this.message = '';
		sessionStorage.removeItem('note_key');
		window.alert('删除成功！');
	}

}
