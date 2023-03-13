// UNKNOWT TYPE : TYPE YG MASIH BELUM TAU TIPE VALUE APA YG AKAN ADA DALAM VARIABLE TSBT
// UNKONWN MEMILIKI KESAMAAN DENGAN ANY TYPE AKAN TETAPI UNKOWN LEBIH STRICT DIBANDINGKAN DENGAN ANY TYPE
let userA: unknown;
let update: string;

// saat ingin update value variabel dengan tipe unkown error tidak akan muncul
// akan tetapi saat kita membuat sebuah variable baru dengan menset type lain maka akan terjadi error terkecuali
// kita menambahkan cek tambahan untuk membuat update value variabel tidak mengalami error
userA = 2;
userA = "berak";
// update = userA; // akan mengalamin error
if (typeof userA === "string") {
	update = userA;
}
