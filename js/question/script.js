const array = [10,20,50,80, 55, 99, 2, 66, 82, 51]

const testArray = []
for (let index = 0; index < 10; index++) {
  testArray.push(Math.ceil(Math.random() * 100))
}

const myDiv = document.querySelector("div")

testArray.forEach((not) => {
  if(not > 50){
    myDiv.innerHTML += `<li style="color:green;">${not}</li>`
  }else{
    myDiv.innerHTML += `<li style="color:red;">${not}</li>`
  }
})