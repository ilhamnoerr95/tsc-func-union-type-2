function add(n1: number, n2: number, showResult: boolean, phraseResult: string) {
	// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
	//   throw new Error('Incorrect input!');
	// }
	const result = n1 + n2;
	if (showResult) {
		console.log(phraseResult + result);
	} else {
		return result;
	}
}

let number1;
number1 = 5;
let number2 = 2.8; //basically let akan menentukan type dengan sendirinya
const printResult = true;
const phraseResult = "The result is: ";

const result = add(number1, number2, printResult, phraseResult);
console.log(result);
