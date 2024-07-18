let meyveler = ["Elma", "Armut", "Erik", "Kiraz", "Karpuz", "Kavun"]

let mapResult =  meyveler.map((meyve) => {
  console.log(meyve)
  if(meyve === "Armut"){
    console.log("İşte İstediğiniz Meyve") 
    return meyve + "-2"
  }
  return meyve
})

console.log(mapResult)
console.log(meyveler)