```diff
- Perlu di ingat bahwa penamaan types pada typescript lowercase "string,number, boolean, etc"
! BASIC TYPES PADA TYPESCRIPT :
+ disaat variabel di deklarasikan menggunakan let, tanpa adanya set type prinsip let akan membuat type dengan sendirinya

+ CORE TYPES PADA TYPESCRIPT :
1. Number : 1, 5.3 ,-10 -> semua number tidak ada perbedaan antara int dan float
2. string: semua text value
3. boolean : true or false -> nilainya cuma 2 saja false or true
4. object : {age: 30} -> semua javascript object, tipe objeck type dari key of valuenya
5. array : [1,3,4] -> semua javascript array, tipe yg bisa fleksible atau strict(tergantun dari element type)
6. tuple : [1,2] -> spesial tipe dari typescript, jumlah fix dari array semisal dalam 1 array terdapat 2 nilai yg tidak bisa ditambahkan, dan type yg dimasukan
bisa mixing(campur)
7. enum(custom type) -> element type valuenya berupa angka, untuk mevalidasi nilai dari suatu variable tertentu dnegan mudah/ type untuk validasi
8. any : * -> any kind value types, tipe bebas terserah mau masukin apa saja sangat fleksibel

+ UNION TYPES:
penggunaan union type memudahkan function untuk menggunakan paramter yg diterima dengan fleksibel

+ LITERAL TYPES:
TIPE VARIABLE ATAU PARAMETER TIDAK HARUS DISIMPAN DNG TIPE TERTENTU, MISAL SEPERTI STRING ATAU NUMBER. TAPI BISA MENYIMPAN LANGSUNG NILAI DARI VALUE TERSBUT
```
