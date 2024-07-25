let array1 = [1, 2, 3, "name", true, "gs"]
let array2 = ["merhaba ", "selam"]

// array1.push("yeni")
console.log(array1)

//SPREAD OPERATORU ...
let newArray = [array1, "yeni2"]
console.log(newArray)


//let array1 = 1, 2,3, "name", true, "gs"
let newArray2 = [...array1, "yeni3", true, { deneme: "test" }]
console.log(newArray2)

let newArray3 = [...array1, ...array2]
console.log(newArray3)

let obj = {
  name: "Oğuzhan",
  surname: "Varlı",
  address: {
    city: "istanbul",
    code: 34
  }
}

let testObj = { obj, takım: "Turkiye" }
console.log(testObj)

let newObj = { ...obj, takım: "Gs" }
console.log(newObj)

//fonksiyonlarda
const test = (a) => {
  console.log(a)
}

test("Merhaba", "Selam")


const toplama = (...value) => {
  let toplam= 0
  // console.log(value)
  value.forEach((item) => {
    console.log(item)
    toplam += item
  })
  console.log(toplam)
  // console.log("Toplama", value)
}

// let sayilar = [1, 2, 3, 4, 5, 6]
toplama(1,2,3,4,5,6,7)



let sayilar = [1, 2, 3, 4, 5, 6, 5, 6, 7, 9, 2, 1, 3, 5, 3]
console.log(sayilar)

//Unique hala getirme
let uniqueArray = [...new Set(sayilar)]
console.log(uniqueArray)