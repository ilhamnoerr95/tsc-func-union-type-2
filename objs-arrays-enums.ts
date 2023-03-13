enum Role {
	ADMIN = "admin",
	READ_ONLY = 100,
	USER = "200",
} //Penamaan enum karena custom menggunakan Menggunakan capital, kebanyakan dari enum type value menggunakan upercase, tapi tidak diwajibkan
// Nlai role akan berupa angka, dan kita bisa mereassign number sesuai yg kita mau, nilai role bisa berubah sesuai yg kita mau
//

// TUPLES spesial tipe pada typescript, saat membuat sebuah array dengan value tertentu
// kit bisa assign tipe array secara eksplisit
const person: {
	name: string;
	age: number;
	hobbies: string[];
	tuples: [number, string];
	role: Role.ADMIN;
} =
	// const person
	{
		name: "Maximilian",
		age: 30,
		hobbies: ["silat", "mandi"],
		tuples: [20, "mandela"], // value element hanya berisikan 2 karena sesuai dengan tipe yg sudah ditetapkan, hanya berupa number dan string saja
		role: Role.ADMIN,
	};

person.tuples.push("titit"); // untuk method push tidak berlaku/tidak error ketika values dalam array hanya memiliki bebrp valu tertentu
// person.tuples = [3, "a", 5]; // disaat target update value yg ditentukan tidak sesuai dengan tipe yg sudah ditentukan, maka error akan muncul
if (person.role === Role.ADMIN) {
	console.log("aku admin");
}
// APABILA PENGGUNAAN TYPE ARRAY BERISI MIX OF VALUES
// MAKA TYPES YG DIGUNAKANA YAITU "ANY" AKAN TETAPI HAL TSBT AKAN MENGHILANGKAN
// FNGSI YG DITAWARKAN OLEH TYPESCRIPT
let favAct: string[];
favAct = ["tai"];

for (const persons of person.hobbies) {
	console.log(persons);
}
console.log(person.name);

// NESTED OBJECT TYPES

const product: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
} = {
	id: "abc1",
	price: 12.99,
	tags: ["great-offer", "hot-and-new"],
	details: {
		title: "Red Carpet",
		description: "A great carpet - almost brand-new!",
	},
};

// any types
const titi: any = 30;
console.log(titi);
