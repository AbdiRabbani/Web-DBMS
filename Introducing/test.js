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

let name = "Abdi" //statement dasar / biasa
console.log(name)

//!expression
/*
merupakan ekspresi js yang  berfungsi untuk menghasilkan nilai tertentu.
*/

let first = 5
let seccond = 2
let result = first + seccond
console.log(result)


if (result >= 5) {
    console.log("jawaban anda " + result)
} else if (result <= 5) {
    console.log("jawaban anda " + result)
}

//!scope
/*
cakupan kode agar bisa mengakses atau membatasi
*/

var a = "Hello my friend" //global scope

function hi() {
    console.log(a)
}

function hi2() {
    a = "nilainya sudah di rubah" //local scope
    console.log(a)
}

hi()
hi2()

//const = tidak bisa di rubah
//var = bisa di ubah ubah dan bersifat global
//let = bisa di ubah namun lebih ke privat jadi tidak bisa di rubah di scope lain

const car = "toyota"

function kendaraan() {
    console.log(car)
    if (true) {
        const motor = "honda" //block scope

        console.log(motor) //bisa di panggil karena satu scope
    }
    /*console.log(motor)*/ //tidak bisa karenanmenggunakan const di luar scope
}

kendaraan()





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

function me(nama, kelas) {
    var text = 'nama : ' + nama + "\nkelas : " + kelas
    return function(){
        console.log(text)
    }
}

var saya = me("abdi","x-rpl-a")

saya()