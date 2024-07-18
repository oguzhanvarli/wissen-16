let randomObjects = {
  name : "Oğuzhan",
  age : 28,
  email : "oguzhan@oguzhan.com",
  hobies : ["Coding", "Error Fix", "Bug Fix", "Release", "Teaching"],
  address : {
    city : "İstanbul",
    country : "Turkey"
  },
  sayHello : () => {
    console.log("Merhaba Oğuzhan Hocam")
  },
  login(){
    alert("Hocam Nasılsın")
  },
}

console.log(randomObjects)
randomObjects.sayHello()

let deneme = randomObjects.email
console.log(deneme)

let deneme2 = randomObjects.sayHello()
console.log(deneme2)

randomObjects.login()
