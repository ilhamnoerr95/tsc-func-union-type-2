// VOID TIDAK MENGEMBALIKAN/RETURN VALUE
// undefined return nothing
function add(name: string, value: string) {
	return name + value;
}

function printResult(hasil: string): void {
	console.log(hasil);
}

function addHandle(c: number, d: number, cb: (arg: number) => void) {
	let result = c + d;
	// callback function
	cb(result);
}

printResult(add("aya", "m goreng"));

// type parameter
// let combineValue: Function;
// type function yg memberikan tipe secara spesifik terhadap function
let combineValue: (a: string, b: string) => string;
combineValue = add;
console.log(add("combina", "tion"));
// let hasil = (resulto) => {
// 	console.log(resulto);
// };
console.log(
	addHandle(5, 5, (result) => {
		console.log(result, typeof result);
		// return true;
	})
);
