export class OpMemoryLine {
	op_element_1 = 0;
	op_element_2 = 0;
	operation = '';
	result = 0;
	time: Date;

	constructor (op_element_1 = 0, op_element_2 = 0, operation  = '', result = 0) {
		this.op_element_1 = op_element_1;
		this.op_element_2 = op_element_2;
		this.operation = operation;
		this.result = result;
		this.time = new Date();
	}
};