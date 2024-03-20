import { Component, OnInit } from '@angular/core';


import { ex1 } from './components/ex1/ex1.component';
import { ex2 } from './components/ex2/ex2.component';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-root',
  	standalone: true,
	imports: [ex1, ex2, DatePipe],
	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{
	time = Date.now();
 	constructor() {
		setInterval(() => {
			this.time = Date.now();
		}, 1000);
	}

	ngOnInit() {    

	}
}