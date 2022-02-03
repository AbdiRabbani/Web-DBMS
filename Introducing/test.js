//!identifier 
/*
adalah penamaan variable, fungsi ataupun parameter 
karakter pertamanya hanya bisa huruf a-z dan simbol Underscrore atau dollar
tdk boleh menggunakan angka di depan nama variable seperti "var 10rpl"
tidak boleh menggunakan bahasa yang sudah ada deafult di js
*/

//!statement
/*
suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
*/

// let name = "Abdi" //statement dasar / biasa
// console.log(name)

//!expression
/*
merupakan ekspresi js yang  berfungsi untuk menghasilkan nilai tertentu.
*/

// let first = 5
// let seccond = 2
// let result = first + seccond
// console.log(result)


// if (result >= 5) {
//     console.log("jawaban anda " + result)
// } else if (result <= 5) {
//     console.log("jawaban anda " + result)
// }

//!scope
/*
cakupan kode agar bisa mengakses atau membatasi
*/

// var a = "Hello my friend" //global scope

// function hi() {
//     console.log(a)
// }

// function hi2() {
//     a = "nilainya sudah di rubah" //local scope
//     console.log(a)
// }

// hi()
// hi2()

//const = tidak bisa di rubah
//var = bisa di ubah ubah dan bersifat global
//let = bisa di ubah namun lebih ke privat jadi tidak bisa di rubah di scope lain

// const car = "toyota"
// 
// function kendaraan() {
//     console.log(car)
//     if (true) {
//         const motor = "honda" //block scope

//         console.log(motor) //bisa di panggil karena satu scope
//     }
//     /*console.log(motor)*/ //tidak bisa karenanmenggunakan const di luar scope
// }

// kendaraan()





// var x = "x"
// const z = "z"
// function test() {
//     let y = "y"
//     console.log(z)
//     if (true) {
//         console.log(y)
//         const c = "c"
//         console.log(c)
//     }
// }
// console.log(x)
// test()


//!closure
/*
closure adalah cara mengakses variable dari parent scope di dalam child scope parent
*/

// function me(nama, kelas) {
//     var text = 'nama : ' + nama + "\nkelas : " + kelas
//     return function () {
//         console.log(text)
//     }
// }

// var saya = me("abdi", "x-rpl-a")

// saya()



//!  Tipe data undifined


// let aaaa

// function firs(params) {
//     aaaa = "This first function"
//     console.log(aaaa)
// }

// function seccond1(params) {
//     aaaa = "This seccond function" 
//     console.log(aaaa)   
// }

// firs()
// seccond1()

//! Tipe data null

// let Null = null

// console.log(Null)

//! Number
/*
 Rentang nilai yang bisa di tamoung oleh tipe data number
*/

//! NaN
/*
Not a Number
*/

// let nan = 17
// if (nan >= 17) {
//     a = 'anda blm cukup umur'
//     console.log(nan/2)
// }else{
//     a = 'anda sudah cukup umur'
//     console.log(nan)
// }

//! Object

// let identitas = {
//     firstName : 'Abdi',
//     lastName : 'Rabbani',
//     email : 'abdirabbani59@gmail.com',
//     insagram : 'abri_r_bani',
//     linkedin : 'AbdiRabbani',
//     phone : 'Iphone',
//     adress : {
//         city : 'Bekasi',
//         number : '17',
//         street : 'jalan sini'
//     }
// }

//* Cara memanggil object
// console.log('firstName : ' + identitas.firstName)
// console.log('My House in :' + identitas.adress.city)


//* Menggunakan array
// console.log(identitas['firstName'])
// console.log(identitas['adress']['city'])

//* bikin tabel

// console.table(identitas)


// let kendaraan2 = {
//     kendaraan : {
//         mobil : "peugeot",
//         motor : "v-xion",
//         sepedah : "united"        
//     },
//     jalan : "Jalan Berkah",
//     kota : "Bekasi",
//     platNomor : "Jabotabek",
//     kereta : {
//        namaKa : "Argo Bromo Anggrek",
//         tujuan : "Senen Pasar Turi" 
//     }
// }

// console.table(kendaraan2)

//* Template literal

// const mobil2 = 'peugeot'
// const motor2 = 'ninja'

//? back ticks = ``

// console.log(`saya punya mobil ${mobil2} dan ${motor2}`) // gunakan back tiks



//* Penulisan simple

// let a = 1, b = 2, c = 3

//*shorthand named property / lebih simple lagi
// let [a,b,c,d,e,f,g] = [1,2,3,4,5,6,7]

//* ternary operator

// let a = 9

// if (a < 10) {
//     console.log('nilai a kurang dari 10')  // cara lama
// }else{
//     console.log('nilai a lebih dari 10')
// }

// a<10
// ? console.log('nilai a kurang dari 10')
// : console.log('nilai a lebih dari 10')


/**
 * Function
 * Merupakan seabuah blok kode untuk membungkus sebuah proses penulisan kode agar tidak diulang kembali
 */

// Function biasa

// function name (params){
//     console.log('saya belajar js')
// }

// name()


//anonymous function

// const ano = function(param){
//     console.log(param)
// }

// ano('saya maen ano')

// arrow function

// let third = () => {
//     console.log('ini adalah arrow function')
// }


// const dua = function(num1, num2) {
//     let a = num1, b = num2
//     console.log(a+b)
// }

// dua(15, 15)



/**
 * High order function
 * fungsi yang menerima fungsi lain serta return bisa berupa fungsi juga.
 */

// Normal Function

// function genap(number) {
//     return number % 2 == 0
// }

// function printfun(number) {
//     let isTrue = genap(number)
//     if (isTrue) {
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }
// printfun(10)

//High order function

// function kecepatan(mobil) {
//     return mobil >= 100
// }

// function warna(mobil) {
//     return mobil == 'merah'
// }

// function kendaraan(mobil, callback) {
//     let a = callback(mobil)
//         if (a) {
//             console.log(`mobil dengan ${mobil} adalah mobil saya`)
//         }else{
//             console.log(`mobil dengan ${mobil} bukan mobil saya`)
//         }
    
// }
// kendaraan(200, kecepatan) 



function tahun(mobil) {
    return mobil <= 2001
}

function cc(mobil) {
    return mobil >= 500
}

function jawaban(callback, mobil) {
    let a = callback(mobil)
    if (a) {
        console.log('gaperlu bayar pajak')
    }else{
        console.log('perlu bayar pajak')
    }
}
jawaban(tahun, 1999)