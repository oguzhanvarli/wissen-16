//sayHello()
function sayHello(){
  console.log("Hello")
}
//sayHello()

//sayHello2()   BURADA YAZDIRMA YAPAMAZSIN ÖNCE YAZMAN GEREKİYOR
const sayHello2 = () => {
  console.log("Hello 2")
}
//sayHello2()



//sayHello3()
const sayHello3 = function() {
  console.log("Hello 3")
}
// sayHello3()


// console.log(firstName)
// let firstName = "Oğuzhan"

const returnName = (name) => {
  // let fullName = "Oğuzhan Varlı"
  console.log(name)
}
let test = returnName("Oğuzhan Varlı")
console.log(test)


const sumNumbers = (value1, value2) => {
  let newNumber = value1 + value2
  console.log(newNumber)
  return newNumber
}

let toplanmısSayilar = sumNumbers(100, 50)
console.log(toplanmısSayilar)
