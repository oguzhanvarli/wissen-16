
for(let index=0; index<=20; index++){
  // console.log(index + " Numarası")
}

let numbers = [1, 3, 5, 7, 9, 11, 22, 33]

for(let index=0; index < numbers.length; index++){
  // console.log(numbers[index])
  if(numbers[index] == 9){
    console.log("İstenen indexe geldin")
    break;
  }
  console.log(numbers[index])
}