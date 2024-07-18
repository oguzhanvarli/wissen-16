let meyveler = ["Elma", "Armut", "Erik", "Kiraz", "Karpuz", "Kavun"]

let foreactResult = meyveler.forEach((meyve) => {
  console.log(meyve)
  if(meyve === "Erik"){
    console.log("Buldum en sevidiğin meyveyi")
    meyve = "Kırmızı Erik"
    console.log(meyve)
    alert("Buldum en sevidiğin meyveyi " + meyve)
  }
})

console.log(foreactResult)  //FOREACH BANA UNDEFINDE DONER
console.log(meyveler)