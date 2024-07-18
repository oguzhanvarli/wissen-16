let random = Math.random() * 100
let clearRandom = Math.trunc(random)
let floorRandom = Math.floor(random)


console.log(random)
console.log(clearRandom)
console.log(floorRandom)  //her zaman aşağıya yuvarlar
console.log(Math.ceil(random))   //her zaman yukarıya yuvarlar
console.log(Math.round(random))  // eğer sayı ondalığı 5 den büyükse yukarıya küçükse aşağıya yuvarlar