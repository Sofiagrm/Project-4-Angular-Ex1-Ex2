import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpMemoryLine } from './OperationLine.model'

@Component({
	selector: 'ex2',
  	standalone: true,
	imports: [FormsModule],
	templateUrl: './ex2.component.html',
  	styleUrls: ['./ex2.component.css'],
})

export class ex2 {
	op_memory_list: OpMemoryLine[] = [];

	op_element_1 = 0;
	op_element_2 = 0;
	operation = '+';
	result = 0;

	calc() {
		switch (this.operation) {
			case '+' : 
				this.result = this.op_element_1 + this.op_element_2; 
				break;
			case '-' : 
				this.result = this.op_element_1 - this.op_element_2; 
				break;
			case '*' : 
				this.result = this.op_element_1 * this.op_element_2; 
				break;
			case '/' : 
				this.result = this.op_element_1 / this.op_element_2; 
				break;
			default :
				console.log('ERROR!');
		}

		let calc_line = new OpMemoryLine(this.op_element_1, this.op_element_2, this.operation, this.result);
		this.op_memory_list.push(calc_line);

		let time = calc_line.time.getHours() + ':' + calc_line.time.getMinutes() +  ':' + calc_line.time.getSeconds();

		let memory_line_text = time + " | " + this.op_element_1 + ' ' + this.operation + ' ' + this.op_element_2 + ' = ' + this.result;
		
		let memory_line = document.createElement("div");
		let memory_contents = document.createElement("span");
		memory_contents.textContent = memory_line_text;

		let delete_line_button = document.createElement("button");
		delete_line_button.textContent = 'x';
		delete_line_button.onclick = () => memory_line.remove();

		memory_line.appendChild(memory_contents);
		memory_line.appendChild(delete_line_button);

		document.getElementById("memory")?.appendChild(memory_line);
	}
}
