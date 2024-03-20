import { Component } from '@angular/core';
import { UpperCasePipe, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'ex1',
  	standalone: true,
	imports: [FormsModule, UpperCasePipe, NgStyle],
	templateUrl: './ex1.component.html',
  	styleUrls: ['./ex1.component.css'],
})

export class ex1 {
	text = '';
	text_to_show = '';
	font_size = 15;
	font_size_to_show = '10px';
	alignment = 'center';
	alignment_to_show = '';
	font_type = 'PT Sans';
	font_type_to_show = '';
	value = 'center';

	Press() {
		console.log(this.text);
		this.text_to_show = this.text;
		this.font_size_to_show = this.font_size + 'px';
		this.font_type_to_show = this.font_type;
		this.alignment_to_show = this.alignment;
	}

	onItemChange(e : Event){
		console.log(" Value is : ", (e.target as HTMLInputElement).value );
		this.alignment = (e.target as HTMLInputElement).value;
	}
	 
}
