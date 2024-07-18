// console.log("Merhaba Oğuzhan Hocam")
// console.log('Merhaba Oğuzhan Hocam-2')


const name = "Oğuzhan"
let surname = "Varlı"

// console.log(name)
// console.log(surname)

//TYPES

let string1 = "Tenefüs sonrası"
let number1 = 10
let boolean1 = true
let array1 = []
let array2 = ["a", "s", "d", "g"]
let array3 = ["oğuzhan", 28, true, [], ["Varlı", 34]]
let obj1 = {
  key : "value",
  age: 28,
  city: "ist",
  array : [1,23,45,4],
  obj: {}
}




{
  let string2 = "Türkiye maçı var hocam"
  const string3 = "Türkiye maçı var hocam 10da"
  //Var noralde kullanılmaz örnek amaçlıdır - ES6 Öncesi
  var string4 = "Ben var ile tanımlandım"
  // console.log(string2)
}
{
  // console.log(string2)
  // console.log(string3)
  //console.log(string4)

}


//STRING METHODS

let stringSample = "ÖğuzhanVarlı"
let stringSample2 = "istanbul"

console.log(stringSample + " " + stringSample2)
console.log(`${stringSample} ${stringSample2} 34`)

console.log(stringSample[2])
console.log(stringSample.length)

let stringSample3 = stringSample.indexOf("K")
let stringSample4 = stringSample.indexOf("O")
let stringSample5 = stringSample.indexOf("ğ")
console.log(stringSample3)
console.log(stringSample4)
console.log(stringSample5)
console.log(stringSample.toLowerCase())
console.log("----------")
console.log(stringSample2.toUpperCase())
console.log(stringSample2.toLocaleUpperCase())

let stringSample6 = " Wissen Akademie Sınıf 301 "

console.log(stringSample6.slice(0, 6))
console.log(stringSample6.replace("z", "l"))
console.log(stringSample6.substring(0,6))
console.log(stringSample6.trim())
console.log(stringSample6.trimEnd())
console.log(stringSample6.trimStart())



//IF-ELSE YAPISI

let condition = true

// if(condition){

// }
// ///////////////////
// if(condition){
  
// }else{

// }
// ///////////////////

// if(condition){
  
// }else if(condition){

// }
// else{

// }

let nullSample = null

console.log(nullSample)

if(5 > 2){
  console.log("5 2'den büyük")
}


if(nullSample){
  console.log("Null değere Girdi")
}else{
  //Buraya Düşer
  console.log("Null Değere Girmedi")
}

let booleanTest = true

if(booleanTest){
  //Eğer Değer True ise İF False ise else
  console.log("İf'e Düştüm")
}else{
  console.log("Else'e Düştüm")
}

let name1 = "Oğuzhan"
let name2 = "Oğuzhan"

if (name1 === name2) {
  //BURAYA DÜŞER
  console.log("İf'e Düştüm")
} else {
  console.log("Else'e Düştüm")
}

let number2 = 10
let number3 = "10"

if (number2 === number3) {
  console.log("İf'e Düştüm")
} else {
  //BURAYA DÜŞER 3 eşittir varsa 2 tane varsa if e düşer
  console.log("Else'e Düştüm")
}

let bolean1 = true
let boolean2 = "true"

if (bolean1 == boolean2) {
  console.log("İf'e Düştüm")
} else {
  //Her türlü buraya düşer
  console.log("Else'e Düştüm")
}

let emptyArray = []

if (emptyArray) {
  //Buraya Düşer
  console.log("İf'e Düştüm")
} else {
  console.log("Else'e Düştüm")
}

let undefinedSample = undefined
let deneme123
console.log(undefinedSample)
console.log(deneme123)

if (undefinedSample) {
  console.log("İf'e Düştüm")
} else {
  //Buraya Düşer
  console.log("Else'e Düştüm")
}

let notArray = [1,2,3,4]

if (notArray) {
  //Buraya Düşer
  console.log("İf'e Düştüm")
} else {
  console.log("Else'e Düştüm")
}




